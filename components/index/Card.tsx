import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { CardDto } from "@/dto/Card.dto";
import FlipCard from "react-native-flip-card";

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
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{front}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{back}</Text>
      </View>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 12,
  },
  textContainer: {
    height: "100%",
    width: "100%",
    borderRadius: 8,

    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 30,
  },
});
