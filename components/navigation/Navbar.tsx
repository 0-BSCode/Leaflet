import { useTheme } from "@/context/Theme.context";
import { Image, StyleSheet, View } from "react-native";
import { ThemedIcon } from "../ThemedIcons";

export function Navbar() {
  const { isDark, setIsDark } = useTheme();
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      {isDark && (
        <ThemedIcon name="moon-outline" onPress={() => setIsDark(!isDark)} />
      )}
      {!isDark && (
        <ThemedIcon name="sunny-outline" onPress={() => setIsDark(!isDark)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { width: 36, height: 36, objectFit: "contain" },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginTop: 20,
    width: "100%",
  },
});
