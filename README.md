# CS624-PE-Sai_Mani_Ritish

## PE01 - Hello World

### Input

Since this app only displays the text of my name, program, and university, and it is static, so there is no input method.

### Process

In this app, the main function renders a 'View' component with the styling of a yellow background. 
I've used three Text components that display static strings. And the StyleSheet defines styling in the container and for the text. Expo is used to run a React Native framework on a mobile device or the web.

### Output

As for the output the application will display the information of my name, program, and university name with a yellow background all centered.
- U Sai Mani Ritish
- MSCS 
- City University of Seattle

The output is viewed on the web or in the 'Expo Go' mobile application.

## PE02 - Core Components 
MSCS Courses

### Input
This time, this app allows the user to enter their favorite course in the Text Box. And I added CityU's logo image to the local assets folder as 'icon.png', and it loaded from there.

### Process
I built this app using a functional component written with an arrow function. It uses the React Native core components, including View, Text, ScrollView, Image, TextInput, and StyleSheet, as per the requirements for this assignment. The ScrollView ensures the screen is scrollable. All course names are stored in arrays and rendered with the map function.

### Output
The app displays an image, a title, an input field, and a scrollable list of MSCS courses. The user’s input is shown on the screen. I walked around with the internal styles used for layout, spacing, and colors to make the UI visually clear.


## PE03 – Todos App

### Input

The user types a task in the text box. Every time the user writes, the input is reflected instantly through the usage of React Native's controlled component logic. The moment we hit the "Add" button, then the value of the input is processed and stored.

### Process

This application is using a class-based React Native component. This is having an internal state with 'inputValue' and an array named 'todos'. When the "Add" button is clicked, the application is going to checks if the input is not empty, adds a new todo object with 'completed: false', and adds it to the 'todos' array using 'setState'. The todo is also logged to the terminal using 'console.log'.

### Output

These new todos are then rendered as a list of '<Text>' items on the screen. Each item entered by the user is displayed in the list as soon as it is entered, and the same text also gets printed to the terminal console as a log for verification. The user interface includes a heading, an input box, an "Add" button, and a list of todos displayed below.

