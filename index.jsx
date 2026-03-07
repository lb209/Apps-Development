import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home() {

  const [dark, setDark] = useState(false);

  return (
    <View style={[styles.container, {backgroundColor: dark ? "black" : "white"}]}>

      <Text style={{color: dark ? "white" : "black", fontSize: 25}}>
        {dark ? "Dark Mode" : "Light Mode"}
      </Text>

      <Button
        title="Toggle Mode"
        onPress={() => setDark(!dark)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});