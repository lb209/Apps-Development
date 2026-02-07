import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';
import { Background } from '@react-navigation/elements';
export default function _layout() {
  return (
<Tabs>
  <Tabs.Screen name="index" options={{ title: "Scoreboard"  }} />,

</Tabs>
  )
}