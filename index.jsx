import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts, Poppins_700Bold_Italic } from "@expo-google-fonts/poppins";

// splash ko auto hide se roko
SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // fonts load hone ke baad splash hide
    }
  }, [fontsLoaded]);

  // jab tak fonts load na hon kuch render na ho
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text
        style={{
          fontFamily: "Poppins_700Bold_Italic",
          color: "white",
          fontSize: 24,
        }}
      >
        Welcome to the Home Screen
      </Text>
    </View>
  );
}
