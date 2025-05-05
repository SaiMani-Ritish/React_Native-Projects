import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}> todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 88,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100'
  }
});

export default Heading;
