// src/Countries/Countries.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Countries({ countries }) {
  return (
    <FlatList
      data={countries}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>Currency: {item.currency}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: { padding: 16, borderBottomWidth: 1 },
  text: { fontSize: 16 },
});
