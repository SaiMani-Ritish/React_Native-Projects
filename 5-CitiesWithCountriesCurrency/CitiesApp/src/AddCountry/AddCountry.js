// src/AddCountry/AddCountry.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddCountry({ addCountry }) {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const handleAdd = () => {
    if (name && currency) {
      addCountry({ name, currency });
      setName('');
      setCurrency('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Country Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Currency:</Text>
      <TextInput style={styles.input} value={currency} onChangeText={setCurrency} />
      <Button title="Add Country" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 18, marginVertical: 8 },
  input: { borderWidth: 1, padding: 8, borderRadius: 5, marginBottom: 16 },
});
