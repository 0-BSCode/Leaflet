import { Dimensions, StyleSheet, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Cards from "@/constants/Cards";
import { CardDeck } from "@/components/index/CardDeck";

const { height: screenHeight } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <CardDeck deckData={Cards} />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: screenHeight,
    flexDirection: "row",
    alignItems: "center",
  },
});
