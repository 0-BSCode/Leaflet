/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { Colors } from "@/constants/Colors";
import { ThemeDto } from "@/dto/Theme.dto";
import { useTheme } from "@/context/Theme.context";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof ThemeDto,
) {
  const { isDark } = useTheme();
  const theme = isDark ? "dark" : "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
