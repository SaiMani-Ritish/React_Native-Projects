## PE03 – Todos App

### Input

The user types a task in the text box. Every time the user writes, the input is reflected instantly through the usage of React Native's controlled component logic. The moment we hit the "Add" button, then the value of the input is processed and stored.

### Process

This application is using a class-based React Native component. This is having an internal state with 'inputValue' and an array named 'todos'. When the "Add" button is clicked, the application is going to checks if the input is not empty, adds a new todo object with 'completed: false', and adds it to the 'todos' array using 'setState'. The todo is also logged to the terminal using 'console.log'.

### Output

These new todos are then rendered as a list of '<Text>' items on the screen. Each item entered by the user is displayed in the list as soon as it is entered, and the same text also gets printed to the terminal console as a log for verification. The user interface includes a heading, an input box, an "Add" button, and a list of todos displayed below.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

