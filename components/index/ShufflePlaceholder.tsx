import React from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import { Card } from "./Card";

interface ShufflePlaceholderProps {
  duration: number;
}

export const ShufflePlaceholder: React.FC<ShufflePlaceholderProps> = ({
  duration,
}) => {
  const spinValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.container, { transform: [{ rotateX: spin }] }]}
      >
        <Card data={{ id: "placeholder", front: "", back: "" }} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});
