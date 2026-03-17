import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Index = () => {
  const [change, setChange] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      
      <TouchableOpacity
        style={{
          width: 120,
          height: 40,
          backgroundColor: change ? "white" : "blue",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setChange(!change)}
      >
        <Text style={{ color: change ? "black" : "white", fontSize: 16 }}>
          {change ? "Flow" : "Flowing"}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default Index;