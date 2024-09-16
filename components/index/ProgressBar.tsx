import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

interface ProgressBarProps {
  currentPage: number;
  deckSize: number;
  borderRadius?: number;
}

const ANIMATION_DURATION = 200;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentPage,
  deckSize,
}) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: ((currentPage + 1) / deckSize) * 100,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
  }, [currentPage, deckSize]);

  return (
    <ThemedView style={styles.progressBar} type="primaryBackground">
      <Animated.View
        style={{
          height: "100%",
          width: progressAnimation.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          overflow: "hidden",
        }}
      >
        <ThemedView style={styles.innerLine} type="secondaryBackground" />
      </Animated.View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: 24,
    borderRadius: 60,
    overflow: "hidden",
  },
  innerLine: {
    height: "100%",
    width: "100%",
  },
});
