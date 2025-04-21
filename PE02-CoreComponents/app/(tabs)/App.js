import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ ...styles.container, flexGrow: 1 }}>
        <Image source={require('./../../assets/images/icon.png')} style={styles.image} />

        <Text style={styles.heading}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />

        <Text style={styles.heading}>MSCS Courses</Text>
        <Text style={styles.subheading}>Core Requirements (24 credits)</Text>
        {Object.entries({
          'CS 504': 'Software Engineering',
          'CS 506': 'Programming for Computing',
          'CS 519': 'Cloud Computing Overview',
          'CS 533': 'Computer Architecture',
          'CS 547': 'Secure Systems and Programs',
          'CS 622': 'Discrete Mathematics and Algorithms',
          'CS 510': 'Artificial Intelligence for Data Science',
          'CS 620': 'Machine Learning & Deep Learning',
        }).map(([code, title], index) => (
          <Text key={index} style={styles.course}>
            {code}: {title}
          </Text>
        ))}

        <Text style={styles.subheading}>Depth of Study (6 Credits)</Text>
        <Text style={styles.course}>CS 624: Full-Stack Development - Mobile App</Text>
        <Text style={styles.course}>CS 625: Full-Stack Development - Web App</Text>

        <Text style={styles.subheading}>Capstone</Text>
        <Text style={styles.course}>CS 690</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subheading: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#80192f',
  },
  course: {
    fontSize: 16,
    marginVertical: 4,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    width: '80%',
  },
});

export default App;