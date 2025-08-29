# PE04 – Profile Cards

## Input
There is no user input for this app, it displays a static dataset using 'Array.from({ length: 6 })'. They are all profile cards. The preset input to the `ProfileCard` is the user image, the name, the role, and the bio content hardcoded within the component.

## Process
The app displays a grid of profile cards, and each card is a React Native element that is wrapped in `Animated.View`. Upon clicking the card, the `handleCardPress` method will change to its expanded state. That calls an animation with `Animated.timing`.

## Output
The app will display six animated profile cards in the form of a responsive two-column grid. One active card will animate up in size after clicking, and clicking again will reduce it.

### Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
