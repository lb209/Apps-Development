import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
  { id: "4", name: "Item 4" },
    { id: "5", name: "Item 4" },
      { id: "6", name: "Item 4" },
        { id: "7", name: "Item 4" },

          { id: "8", name: "Item 4" },
            { id: "9", name: "Item 4" },
];

export default function App() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.box}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    height: 80,
    backgroundColor: "#4caf50",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});