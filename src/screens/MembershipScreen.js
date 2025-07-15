import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MembershipScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Membership Page</Text>
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
