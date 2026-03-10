import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {

  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandom = () => {
const char="askldjfielkdklsierjkdiaAJLKJADOIJNALDIAJLDNNL;NEORIJAAA12357809892598098290@!#$%^*&!><"
let pass="";                                  
for(let i=0;i<10;i++){
const gan=Math.floor(Math.random()*char.length)
pass+=char[gan]
}
setRandomNumber(pass)
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>
        Random Number: {randomNumber}
      </Text>

      <Button title="Generate Number" onPress={generateRandom} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});