import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href="/login"
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          width: 100,
          alignItems: "center",
        }}
      >
        <Text style={{ color: 'white', textAlign: "center" }}>
          Continue
        </Text>
      </Link>
    </View>
  );
}
