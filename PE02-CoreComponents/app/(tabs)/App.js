import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.image} />

      <Text style={styles.header}>MSCS Core Courses</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        onChangeText={setFavoriteCourse}
        value={favoriteCourse}
      />

      <Text style={styles.favorite}>Your Favorite Course: {favoriteCourse}</Text>

      <View style={styles.courseBox}>
        <Text style={styles.course}>CS 504 - Operating Systems</Text>
        <Text style={styles.course}>CS 506 - Programming Languages</Text>
        <Text style={styles.course}>CS 514 - Algorithms</Text>
        <Text style={styles.course}>CS 517 - Database Systems</Text>
        <Text style={styles.course}>CS 518 - Software Engineering</Text>
        <Text style={styles.course}>CS 532 - Computer Architecture</Text>
        <Text style={styles.course}>CS 542 - Networking</Text>
        <Text style={styles.course}>CS 547 - Cybersecurity</Text>
        <Text style={styles.course}>CS 615 - Advanced Software Dev (Depth)</Text>
        <Text style={styles.course}>CS 620 - Machine Learning (Depth)</Text>
        <Text style={styles.course}>CS 690 - Capstone</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  favorite: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  courseBox: {
    width: '100%',
  },
  course: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
