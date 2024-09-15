import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { CardDto } from "@/dto/Card.dto";
import { Card } from "./Card";
import PagerView from "react-native-pager-view";
import { useTimer } from "@/hooks/useTimer";
import { ShufflePlaceholder } from "./ShufflePlaceholder";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { ThemedIcon } from "../ThemedIcons";
import { ProgressBar } from "./ProgressBar";

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
      if (currentPage === deckSize - 1) {
        setCurrentPage(0);
      }
    } else {
      pause();
    }
  }, [isPlaying]);

  return (
    <ThemedView lightColor="#000" style={styles.mainContainer}>
      <ThemedView style={styles.progressBarContainer}>
        <ThemedText style={styles.progressText} type="subtitle">
          {currentPage + 1}/{deckSize}
        </ThemedText>
        <ProgressBar currentPage={currentPage} deckSize={deckSize} />
      </ThemedView>
      <ThemedView style={styles.setContainer}>
        {isShuffling ? (
          <ShufflePlaceholder duration={SHUFFLE_DURATION} />
        ) : (
          <PagerView
            initialPage={INITIAL_PAGE}
            ref={pagerRef}
            onPageSelected={(e) => handlePageChange(e.nativeEvent.position)}
            style={styles.pagerView}
            pageMargin={PAGE_MARGIN}
          >
            {deck.map((cardData) => (
              <Card data={cardData} key={cardData.id} />
            ))}
          </PagerView>
        )}
      </ThemedView>

      <ThemedView style={styles.controlsContainer}>
        <ThemedView style={styles.button}>
          {isPlaying ? (
            <ThemedIcon name="pause" onPress={() => setIsPlaying(false)} />
          ) : (
            <ThemedIcon name="play" onPress={() => setIsPlaying(true)} />
          )}
        </ThemedView>
        <ThemedView style={styles.button}>
          <ThemedIcon name="shuffle" onPress={handleShuffle} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  progressText: {},
  progressBarContainer: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 24,
    display: "flex",
    alignItems: "center",
    rowGap: 12,
    width: "100%",
  },
  progressBar: {
    width: "100%",
    height: 24,
    borderRadius: 60,
  },
  setContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  pagerView: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
    borderRadius: 100,
  },
});
