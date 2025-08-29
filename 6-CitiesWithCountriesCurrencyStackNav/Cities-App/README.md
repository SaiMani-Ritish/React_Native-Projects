# PE06 – Cities with Countries and Currency with Nav

## Input
The user can add countries through the AddCountry tab or select a country from the Countries list.

## Process
The app uses bottom tab navigation for major sections and stack navigation for navigating between countries and their detailed information. Selecting a country triggers navigation and data transfer using route parameters.

## Output
The Countries tab displays a list of countries. When the user taps a country, the app displays the name, currency, and whether it is currently used in the country. All navigation and screens are handled using stack-based navigators for a better user experience.


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
