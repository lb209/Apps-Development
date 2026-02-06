import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
export default function Signup() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
const router = useRouter();
  const handleSignup = () => {
if(!email || !password) {
  setResult("Error: Please fill all the fields");
  return;
}
if(email){
  setResult("Login successful!");
}

// Reset form
setEmail('');
setPassword(''); 

  }
  setTimeout(() => {
    if(result === "Login successful!") {
  router.push('/index'); // Redirect to home page after successful login
    }
  },2000)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
    
      <TextInput
        value={email} onChangeText={setEmail} placeholder="Enter Email" placeholderTextColor="#999"
        style={{ width: 280, height: 45, borderWidth: 1, borderColor: "#ccc", borderRadius: 12, paddingHorizontal: 12, marginBottom: 15, backgroundColor: "#fff" }}
      />

      <TextInput
        value={password} onChangeText={setPassword} placeholder="Enter Password" placeholderTextColor="#999" secureTextEntry
        style={{ width: 280, height: 45, borderWidth: 1, borderColor: "#ccc", borderRadius: 12, paddingHorizontal: 12, marginBottom: 20, backgroundColor: "#fff" }}
      />

      <TouchableOpacity
        onPress={handleSignup}
        style={{ backgroundColor: 'blue', padding: 12, borderRadius: 8, width: 100, alignItems: 'center' }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>

      <Link href="/signup" style={{ marginTop: 15, color: 'blue', textDecorationLine: "underline" }}>
        Already have an account? Signup
      </Link>

      <Text style={{ marginTop: 20, fontSize: 16, color: result.includes("Error") ? "red" : "green" }}>
        {result}
      </Text>
    </View>
  );
}
