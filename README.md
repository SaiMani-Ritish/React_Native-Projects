# React Native Mini Projects

## 1 - Hello World

### Input

Since this app only displays the text of my name, program, and university, and it is static, so there is no input method.

### Process

In this app, the main function renders a 'View' component with the styling of a yellow background. 
I've used three Text components that display static strings. And the StyleSheet defines styling in the container and for the text. Expo is used to run a React Native framework on a mobile device or the web.

### Output

As for the output, the application will display the information of my name, program, and university name with a yellow background all centered.
- U Sai Mani Ritish
- MSCS 
- City University of Seattle

The output is viewed on the web or in the 'Expo Go' mobile application.


## 2 - Core Components 
MSCS Courses

### Input
This time, this app allows the user to enter their favorite course in the Text Box. And I added CityU's logo image to the local assets folder as 'icon.png', and it loaded from there.

### Process
I built this app using a functional component written with an arrow function. It uses the React Native core components, including View, Text, ScrollView, Image, TextInput, and StyleSheet, as per the requirements for this assignment. The ScrollView ensures the screen is scrollable. All course names are stored in arrays and rendered with the map function.

### Output
The app displays an image, a title, an input field, and a scrollable list of MSCS courses. The user’s input is shown on the screen. I walked around with the internal styles used for layout, spacing, and colors to make the UI visually clear.


## 3 – Todos App

### Input
The user can interact with the app to manage their tasks. The text input field is used to enter a new task to the list, and the submit button will add the task to the list. Every to-do has a Title and "Done" and "Delete" buttons. There is also a tab bar at the bottom with All, Active, and Complete filtering options, and users are able to view these tasks based on their status.

### Process
When the user enters a task and clicks "Submit", the app stores it in the local state and logs to the console. Each task is an object of title and complete status. "Done" button toggles the completion status, and "Delete" removes the task. The tab bar updates the UI based on the selected filter by setting conditions to show all, completed, or pending tasks.

### Output
The task list is presented as a styled scroll view. Finished tasks are filtered. Based on the active filter tab, the UI will update dynamically to show the relevant tasks. Actions like add or remove are immediately reflected in the interface and printed to the terminal for both functional interactivity and developer visibility in testing.


## 4 – Profile Cards

### Input
There is no user input for this app, it displays a static dataset using 'Array.from({ length: 6 })'. They are all profile cards. The preset input to the `ProfileCard` is the user image, the name, the role, and the bio content hardcoded within the component.

### Process
The app displays a grid of profile cards, and each card is a React Native element that is wrapped in `Animated.View`. Upon clicking the card, the `handleCardPress` method will change to its expanded state. That calls an animation with `Animated.timing`.

### Output
The app will display six animated profile cards in the form of a responsive two-column grid. One active card will animate up in size after clicking, and clicking again will reduce it.


## 5 – Cities with Countries and Currency

### Input
- User can enter a city name and add the country name to it.
- Also user can input a country name and its currency in the AddCountry tab.

### Process
- Cities and locations are stored in component state using `this.state.cities`.
- Similarly, countries and their currencies are added to `this.state.countries`.
- React Navigation will manage the navigation between tabs:
  - `CitiesNav`: stack for viewing cities and their country
  - `AddCity`: for adding a new city
  - `AddCountry`: to add a new country
  - `Countries`: to show all added countries

### Output
- The `Cities` screen will display the list of cities and countries.
- The `AddCity` screen is used to add a new city.
- The `AddCountry` screen lets users add countries and currencies.
- The `Countries` screen lists the country name and currency as output.
  

## 6 – Cities with Countries and Currency With Nav

### Input
The user can add countries through the AddCountry tab or select a country from the Countries list.

### Process
The app uses bottom tab navigation for major sections and stack navigation for navigating between countries and their detailed information. Selecting a country triggers navigation and data transfer using route parameters.

### Output
The Countries tab displays a list of countries. When the user taps a country, the app displays the name, currency, and whether it is currently used in the country. All navigation and screens are handled using stack-based navigators for a better user experience.




