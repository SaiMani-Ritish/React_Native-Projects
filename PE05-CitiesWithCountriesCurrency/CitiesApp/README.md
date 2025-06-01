# PE05 – Cities with Countries and Currency

## Input
- User can enter a city name and add the country name to it.
- Also user can input a country name and its currency in the AddCountry tab.

## Process
- Cities and locations are stored in component state using `this.state.cities`.
- Similarly, countries and their currencies are added to `this.state.countries`.
- React Navigation will manage the navigation between tabs:
  - `CitiesNav`: stack for viewing cities and their country
  - `AddCity`: for adding a new city
  - `AddCountry`: to add a new country
  - `Countries`: to show all added countries

## Output
- The `Cities` screen will display the list of cities and countries.
- The `AddCity` screen is used to add a new city.
- The `AddCountry` screen lets users add countries and currencies.
- The `Countries` screen lists the country name and currency as output.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```
