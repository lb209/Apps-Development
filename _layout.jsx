import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { Background } from '@react-navigation/elements';
export default function _layout() {
  return (
<Stack>
  <Stack.Screen name="index" options={{ title: "Home" }} />,
<Stack.Screen name="signup" options={{ title: "Signup" }} />,
<Stack.Screen name="login" options={{ title: "Login" }} />
<Stack.Screen name="modal" options={{ title: "modal" }} />
</Stack>
  )
}