import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>U Sai Mani Ritish</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});