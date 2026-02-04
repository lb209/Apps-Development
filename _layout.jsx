import { Colors } from '@/constants/theme';
import { Background } from '@react-navigation/elements';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerStyle:{backgroundColor:"yellow"}
    }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}
