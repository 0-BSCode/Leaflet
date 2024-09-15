import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";

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

  return <Ionicons name={name} size={36} color={color} onPress={onPress} />;
}
