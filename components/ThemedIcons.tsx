import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Animated, GestureResponderEvent, Pressable } from "react-native";
import { useRef } from "react";

export type ThemedIconProps = {
  name: "shuffle" | "pause" | "play" | "moon-outline" | "sunny-outline";
  onPress?: (event: GestureResponderEvent) => void;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedIcon({
  name,
  onPress,
  lightColor,
  darkColor,
}: ThemedIconProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = (toValue: number) => {
    Animated.spring(scale, {
      toValue,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={() => animateScale(0.75)}
      onPressOut={() => animateScale(1)}
      onPress={onPress}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Ionicons name={name} size={36} color={color} />
      </Animated.View>
    </Pressable>
  );
}
