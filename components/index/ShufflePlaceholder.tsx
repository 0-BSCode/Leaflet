import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Card } from "./Card";

interface ShufflePlaceholderProps {
  duration: number;
}

const SMOOTHING_DURATION = 125;

export const ShufflePlaceholder: React.FC<ShufflePlaceholderProps> = ({
  duration,
}) => {
  const spinValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: duration + SMOOTHING_DURATION,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotateX: spin }] }}>
        <Card data={{ id: "placeholder", front: "", back: "" }} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
