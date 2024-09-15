import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CardDto } from "@/dto/Card.dto";
import { Card } from "./Card";
import { Ionicons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import { useTimer } from "@/hooks/useTimer";
import { ShufflePlaceholder } from "./ShufflePlaceholder";

interface CardDeckProps {
  deckData: CardDto[];
}

const PAGE_MARGIN = 20;
const INITIAL_PAGE = 0;
const AUTOPLAY_INTERVAL = 5000;
const SHUFFLE_DURATION = 750;

export const CardDeck: React.FC<CardDeckProps> = ({ deckData }) => {
  const [deck, setDeck] = useState<CardDto[]>(deckData);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(INITIAL_PAGE);

  const deckSize = deckData.length;
  const pagerRef = React.createRef<PagerView>();
  const { pause, resume } = useTimer(
    () => setCurrentPage((prev) => (prev + 1) % deckSize),
    AUTOPLAY_INTERVAL,
  );

  const handlePageChange = (position: number) => {
    setCurrentPage(position);
  };

  const handleShuffle = async () => {
    if (isShuffling) return;

    const newDeck = deck.sort(() => Math.random() - 0.5);
    setIsShuffling(true);
    setDeck(newDeck);

    await new Promise((resolve) => setTimeout(resolve, SHUFFLE_DURATION));
    setIsShuffling(false);
  };

  useEffect(() => {
    pagerRef.current?.setPage(currentPage);
    if (currentPage === deckSize - 1) {
      setIsPlaying(false);
    }
  }, [currentPage]);

  useEffect(() => {
    if (isPlaying) {
      resume();
    } else {
      pause();
    }
  }, [isPlaying]);

  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.progressBar}></View> */}
      <View style={styles.setContainer}>
        {isShuffling ? (
          <ShufflePlaceholder duration={SHUFFLE_DURATION} />
        ) : (
          <PagerView
            initialPage={INITIAL_PAGE}
            ref={pagerRef}
            onPageSelected={(e) => handlePageChange(e.nativeEvent.position)}
            style={styles.setContainer}
            pageMargin={PAGE_MARGIN}
          >
            {deck.map((cardData) => (
              <Card data={cardData} key={cardData.id} />
            ))}
          </PagerView>
        )}
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.button}>
          {isPlaying ? (
            <Ionicons
              name="pause"
              size={30}
              color="black"
              onPress={() => setIsPlaying(false)}
            />
          ) : (
            <Ionicons
              name="play"
              size={30}
              color="black"
              onPress={() => setIsPlaying(true)}
            />
          )}
        </View>
        <View style={styles.button}>
          <Ionicons
            name="shuffle"
            size={30}
            color="black"
            onPress={handleShuffle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "blue",
  },
  progressBar: {
    height: "15%",
    width: "100%",
  },
  setContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "grey",
  },
  controlsContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
    backgroundColor: "white",
    borderRadius: 100,
  },
});
