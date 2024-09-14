import React from "react";
import { View, StyleSheet } from "react-native";
import { CardDto } from "@/dto/Card.dto";
import { Card } from "./Card";
import { Ionicons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";

interface CardDeckProps {
  deckData: CardDto[];
}

const PAGE_MARGIN = 20;

export const CardDeck: React.FC<CardDeckProps> = ({ deckData }) => {
  const pagerRef = React.createRef<PagerView>();
  const deckSize = deckData.length;

  const handlePageChange = (position: number) => {
    if (position === 0) {
      pagerRef.current?.setPage(deckData.length);
    } else if (position === deckSize + 1) {
      pagerRef.current?.setPage(1);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.progressBar}></View>
      <View style={styles.setContainer}>
        <PagerView
          initialPage={1}
          ref={pagerRef}
          onPageSelected={(e) => handlePageChange(e.nativeEvent.position)}
          style={styles.setContainer}
          pageMargin={PAGE_MARGIN}
        >
          {/* clones are for looping again */}
          <Card data={deckData[deckSize - 1]} key={"last-clone"} />
          {deckData.map((cardData, _) => (
            <Card data={cardData} key={cardData.id} />
          ))}
          <Card data={deckData[0]} key={"first-clone"} />
        </PagerView>
      </View>

      <View style={styles.controlsContainer}>
        <View style={styles.button}>
          <Ionicons name="play" size={30} color="black" />
        </View>
        <View style={styles.button}>
          <Ionicons name="shuffle" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
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
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "15%",
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
