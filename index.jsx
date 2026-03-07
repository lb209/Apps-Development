import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Home() {

  const [show, setShow] = useState(true);

  return (
    <View>

      <Button
        title="Hide / Show"
        onPress={() => setShow(!show)}
      />

      {
        show && <Text>This is hidden text</Text>
      }

    </View>
  );
}