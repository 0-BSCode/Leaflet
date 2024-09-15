/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { ThemeDto } from "@/dto/Theme.dto";

export const Colors: { light: ThemeDto; dark: ThemeDto } = {
  light: {
    text: "#283618",
    background: "#fff",
    primaryBackground: "#FFFFFF",
    secondaryBackground: "#606C38",
    tertiaryBackground: "#eee",
  },
  dark: {
    text: "#fff",
    background: "#1F1F1F",
    primaryBackground: "#1F1F1F",
    secondaryBackground: "#606C38",
    tertiaryBackground: "#FEFAE0",
  },
};
