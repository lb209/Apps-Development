import { View, Text, Platform } from 'react-native'
import React from 'react'

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Current Platform: {Platform.OS}
      </Text>

      {
        Platform.OS === "android" ? (
          <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
        ) : (
          <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
        )
      }

    </View>
  )
}