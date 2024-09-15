import React from "react";
import { StyleSheet } from "react-native";
import { CardDto } from "@/dto/Card.dto";
import FlipCard from "react-native-flip-card";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

interface CardProps {
  data: CardDto;
}

export const Card: React.FC<CardProps> = ({ data: { front, back } }) => {
  return (
    <FlipCard
      style={styles.cardContainer}
      friction={8}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
    >
      <ThemedView
        style={styles.textContainer}
        lightColor={Colors.light.tertiaryBackground}
        darkColor={Colors.dark.secondaryBackground}
      >
        <ThemedText style={styles.cardText} type="default">
          {front}
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={styles.textContainer}
        lightColor={Colors.light.tertiaryBackground}
        darkColor={Colors.dark.secondaryBackground}
      >
        <ThemedText style={styles.cardText}>{back}</ThemedText>
      </ThemedView>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  textContainer: {
    height: "90%",
    width: "100%",
    borderRadius: 30,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 32,
    lineHeight: 36,
  },
});
