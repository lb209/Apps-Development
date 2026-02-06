import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState(""); // Input field state

  // Ye function button click handle karega
  const click = (value) => {
    setNum((prev) => prev + value);
  };

  // Single Button UI
const CalcButton = ({ text, bg = "#333", onPress }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress ? onPress : () => click(text)} // agar onPress pass kiya hai to use karo, warna click(text)
    style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: bg,
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
    }}
  >
    <Text style={{ color: bg === "#a5a5a5" ? "#000" : "#fff", fontSize: 22, fontWeight: "bold" }}>
      {text}
    </Text>
  </TouchableOpacity>
);

  const clear = () => {   
     setNum("")
  }

  const equ = () => {
    try {
      setNum(eval(num).toString());
    } catch (error) {
      setNum("Error");
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      {/* Input Field */}
      <TextInput
        value={num}
        onChangeText={setNum}
        editable={false}
        style={{
          width: "90%",
          height: 80,
          backgroundColor: "orange",
          color: "black",
          fontSize: 32,
          textAlign: "right",
          padding: 15,
          borderRadius: 20,
          marginBottom: 25,
        }}
      />

      {/* Buttons Layout */}
      <View>
        {/* Row 1 */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CalcButton text="AC" bg="#a5a5a5" onPress={clear} />
          <CalcButton text="DEL" bg="#a5a5a5" onPress={() => setNum(num.slice(0, -1))} />
          <CalcButton text="÷" bg="#ff9500" onPress={()=>click("/")} />
        </View>

        {/* Row 2 */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CalcButton text="7" />
          <CalcButton text="8" />
          <CalcButton text="9" />
          <CalcButton text="×" bg="#ff9500" onPress={()=>click("*")}/>
        </View>

        {/* Row 3 */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CalcButton text="4" />
          <CalcButton text="5" />
          <CalcButton text="6" />
          <CalcButton text="−" bg="#ff9500" onPress={()=>click("-")}/>
        </View>

        {/* Row 4 */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CalcButton text="1" />
          <CalcButton text="2" />
          <CalcButton text="3" />
          <CalcButton text="+" bg="#ff9500" onPress={() => click("+")} />
        </View>

        {/* Row 5 */}
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <CalcButton text="0" />
          <CalcButton text="." />
          <CalcButton text="=" bg="#34c759" onPress={equ} />
        </View>
      </View>
    </View>
  );
}
