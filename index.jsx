import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home() {
  const [log, setLog] = useState(true);

  return (
    <View style={styles.container}>
      {log ? (
        <View style={styles.card}>
          <Text style={styles.text}>Welcome User</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Logout"
              color="#e74c3c"
              onPress={() => setLog(!log)}
            />
          </View>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.text}>Please Login</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Login"
              color="#27ae60"
              onPress={() => setLog(!log)}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    padding: 30,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },
  buttonContainer: {
    width: "100%",
  },
});