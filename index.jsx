import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const index = () => {
 const[counter,setCounter]=useState(0)

   useEffect(()=>{
  const interval=setInterval(()=>{
    setCounter(prev=>prev+1);
  },1000)
  return()=>clearInterval(interval);
},[])
  
  return (
    <View>
      <Text>Time Counter</Text>
  
      <Text>{counter}</Text>
    </View>
  );
}

export default index;
