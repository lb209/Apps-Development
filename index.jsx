import { View, Text, Modal,Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
export default function index() {
  const [visible, setVisible] =useState(false);
  return (
    <View>
      <Button title="Open Modal" onPress={() =>setVisible(true)} />
        <Modal  visible={visible} animationType="fade" onRequestClose={() => setVisible(false)}  >
<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
  <Text style={{ fontSize: 18, marginBottom: 20 }}>This is a modal!</Text>
  <Button title="Close Modal" onPress={() => setVisible(false)} />
</View> 
        </Modal>
    </View>
  )
}