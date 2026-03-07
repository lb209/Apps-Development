import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Home() {

  const [count, setCount] = useState(0);
  let interval;

  const start = () => {
    interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(interval);
  };

  return (
    <View>

      <Text>{count}</Text>

      <Button title="Start" onPress={start} />
      <Button title="Stop" onPress={stop} />

    </View>
  );
}