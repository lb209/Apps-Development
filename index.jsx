import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PostCard = () => {
  // 1️⃣ State
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  // 2️⃣ Toggle Like function
  const toggleLike = () => {
    setLiked(prev => !prev);
    setCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <View style={styles.card}>
      
      <Text style={styles.postTitle}>Beautiful Sunset</Text>

      <TouchableOpacity style={styles.likeBtn} onPress={toggleLike}>
        <Text style={[styles.heart, liked ? styles.liked : styles.notLiked]}>
          {liked ? '❤️' : '🤍'}
        </Text>
        <Text style={styles.count}>{count}</Text>
      </TouchableOpacity>

    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    margin: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    flex: 1,
  },
  likeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heart: {
    fontSize: 24,
    marginRight: 8,
  },
  liked: {
    color: 'red',
  },
  notLiked: {
    color: 'gray',
  },
  count: {
    fontSize: 16,
  },
});