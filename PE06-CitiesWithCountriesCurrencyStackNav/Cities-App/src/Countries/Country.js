import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Country({ route }) {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.name}</Text>
      <Text>Currency: {country.currency}</Text>
      <Text>Used: {country.currencyUsed ? 'Yes' : 'No'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});
