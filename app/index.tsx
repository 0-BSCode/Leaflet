import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Cards from "@/constants/Cards";
import { CardDeck } from "@/components/index/CardDeck";
import { Navbar } from "@/components/navigation/Navbar";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <Navbar />
      <CardDeck deckData={Cards} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
});
