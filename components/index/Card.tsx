import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { CardDto } from "@/dto/Card.dto";

interface CardProps {
  data: CardDto;
}

export const Card: React.FC<CardProps> = ({ data: { front, back } }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [content, setContent] = useState<string>(front);

  const onFlip = () => {
    setIsFlipped(!isFlipped);
    setContent(isFlipped ? front : back);
  };

  return (
    <Pressable onPress={onFlip} style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>{content}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    height: 300,
    width: 300,
    borderRadius: 30,

    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 30,
  },
});
