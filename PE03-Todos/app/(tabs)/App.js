import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Button, Text } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
    };
  }

  inputChange = (value) => {
    this.setState({ inputValue: value });
  };

  submitTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim()) {
      const newTodo = {
        title: inputValue,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        inputValue: '',
      });
      console.log('Added:', newTodo.title);
    }
  };

  render() {
    const { inputValue, todos } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.content}
        >
          <Heading />
          <Input inputValue={inputValue} inputChange={this.inputChange} />
          <Button title="Add" onPress={this.submitTodo} />

          <View style={styles.todoList}>
            {todos.map((todo, index) => (
              <Text key={index} style={styles.todoItem}>
                {todo.title}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop:60,
    },
});

export default App;