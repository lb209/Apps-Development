import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [users, setUsers] = useState([]); // array of registered users
  const router = useRouter();
  const handleSignup = () => {
  
    // 1️⃣ Check if fields are empty
    if (!name || !email || !password) {
      setResult("Error: Please fill all the fields");
      return;
    }

    // 2️⃣ Check duplicate email
    const existingUser = users?.find(u => u.email === email);
    if (existingUser) {
      setResult("Error: Email already used! Please login.");
    
      return;
    }

    // 3️⃣ Add new user
    const newUser = { name, email, password };
setUsers([...(users || []), newUser]);


    // 4️⃣ Reset form
    setName('');
    setEmail('');
    setPassword('');

    // 5️⃣ Show success
    setResult("Signup successful!");
    Alert.alert("Signup successful!");
   // Redirect to login page after successful signup
  };
setTimeout(() => {
  if(result === "Signup successful!") {
    router.push('/login');
  }
},2000)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
      <TextInput
        value={name} onChangeText={setName} placeholder="Enter Name" placeholderTextColor="#999"
        style={{ width: 280, height: 45, borderWidth: 1, borderColor: "#ccc", borderRadius: 12, paddingHorizontal: 12, marginBottom: 15, backgroundColor: "#fff" }}
      />

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
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
      </TouchableOpacity>

      <Link href="/login" style={{ marginTop: 15, color: 'blue', textDecorationLine: "underline" }}>
        Already have an account? Login
      </Link>

      <Text style={{ marginTop: 20, fontSize: 16, color: result.includes("Error") ? "red" : "green" }}>
        {result}
      </Text>
    </View>
  );
}
