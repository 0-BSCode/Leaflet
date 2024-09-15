import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/context/Theme.context";
import { StyleSheet, View } from "react-native";
import { ThemedIcon } from "../ThemedIcons";

export function Navbar() {
  const { isDark, setIsDark } = useTheme();
  return (
    <View style={styles.container}>
      {/* <Ionicons name="help" size={36} /> */}
      <ThemedIcon name="help" />
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    width: "100%",
    // backgroundColor: "red",
  },
});
