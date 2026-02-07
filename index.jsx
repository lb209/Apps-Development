import { View, Text,Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ReactNativeModal from 'react-native-modal';
export default function index() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
        Welcome to the Scoreboard App!
      </Text>   

      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
<ReactNativeModal
  isVisible={modalVisible}
  onBackdropPress={() => setModalVisible(false)}
  onBackButtonPress={() => setModalVisible(false)}
  onBackDropPress={() => setModalVisible(false)}
  animationIn={"swing"}
  animationOut={"swing"}
  style={{ justifyContent: 'center', alignItems: 'center' }}
>
  <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>This is a Modal!</Text>
    <Button title="Close" onPress={() => setModalVisible(false)} />
  </View>
</ReactNativeModal>           
    </View>
  )
}