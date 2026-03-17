import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';

const AnimatedButton = () => {
  const scale = useRef(new Animated.Value(1)).current;

  // Press in animation
  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 1.1,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  // Press out animation
  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.buttonWrapper,
          { transform: [{ scale }] },
          { shadowOpacity: scale.interpolate({
              inputRange: [1, 1.1],
              outputRange: [0.2, 0.7],
            })
          }
        ]}
      >
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={() => console.log('Button Pressed!')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default AnimatedButton;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f5f5f5',
  },
  buttonWrapper: {
    borderRadius: 12,
    shadowColor: '#6200ee',
    shadowOffset: { width:0, height:5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'bold',
  },
});