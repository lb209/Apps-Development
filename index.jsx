import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Index = () => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setQuantity(1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Product: Shoes</Text>

      {
        quantity === 0 ? (
          <TouchableOpacity style={styles.addBtn} onPress={addToCart}>
            <Text style={styles.btnText}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.counterBox}>

            <TouchableOpacity style={styles.box} onPress={decrease}>
              <Text style={styles.boxText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{quantity}</Text>

            <TouchableOpacity style={styles.box} onPress={increase}>
              <Text style={styles.boxText}>+</Text>
            </TouchableOpacity>

          </View>
        )
      }

    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  addBtn: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
  counterBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    backgroundColor: "gray",
    padding: 10,
    marginHorizontal: 10,
  },
  boxText: {
    color: "white",
    fontSize: 18,
  },
  quantity: {
    fontSize: 18,
  },
});