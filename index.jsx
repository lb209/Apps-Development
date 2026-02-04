import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: "white", marginBottom: 20 }}>
        Hello welcome to Codesod
      </Text>

      ✅ {/* IMPORTANT */}
      <Link href="/(tabs)/about" style={{ color: "white", fontSize: 20 }}>
        Go to About
      </Link>
    </View>
  );
}
