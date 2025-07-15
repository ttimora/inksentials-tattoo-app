import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SocialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Social Media Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
