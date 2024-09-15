import { SafeAreaView, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "primaryBackground" | "secondaryBackground";
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  type,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    type ?? "primaryBackground",
  );

  return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}
