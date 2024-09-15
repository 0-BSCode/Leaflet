import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

export function Navbar() {
  return (
    <View style={styles.container}>
      <Ionicons name="help" size={36} />
      <Ionicons name="sunny-outline" size={36} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    width: "100%",
    backgroundColor: "red",
  },
});
