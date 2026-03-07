import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ VIP Counter ✨</Text>

      <Text style={styles.countText}>{count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.decrement]} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.increment]} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e2f",
  },
  title: {
    fontSize: 28,
    color: "#f8c700",
    fontWeight: "bold",
    marginBottom: 40,
  },
  countText: {
    fontSize: 80,
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 40,
    textShadowColor: "#f8c700",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#f8c700",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  increment: {
    backgroundColor: "#28c76f",
  },
  decrement: {
    backgroundColor: "#ea5455",
  },
  buttonText: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "bold",
  },
});