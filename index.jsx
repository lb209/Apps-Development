import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.box}>Item 1</Text>
      <Text style={styles.box}>Item 2</Text>
      <Text style={styles.box}>Item 3</Text>
      <Text style={styles.box}>Item 4</Text>
      <Text style={styles.box}>Item 5</Text>
      <Text style={styles.box}>Item 6</Text>
      <Text style={styles.box}>Item 7</Text>
      <Text style={styles.box}>Item 8</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    height: 100,
    backgroundColor: "#4caf50",
    marginBottom: 15,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 20,
  },
});