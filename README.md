# Currency Converter

The Currency Converter client lives inside of the `client` folder. In the future I plan on creating backend inside of another folder, but V1 only includes the client.

## General info

This project is a simple currency converter that converts currency rates between USD, EUR and CHF by using the [currencylayer API](https://currencylayer.com/documentation) to get real-time exhange rates.

## Technologies

Project is created with:

- React.js
- Styled-Components
  (I changed pixels on some elements (width, height or margin) in order to match the design.)

## Setup

To access the currencylayer API, you first need to generate a new API token. You can do so by creating a currencylayer account [here](https://currencylayer.com/signup/free). After getting an API key, save it in a `.env` file in the `client` directory.

```
REACT_APP_CURRENCYLAYER_API_KEY=someapikey
```

To run this project, install it locally using npm:

```
$ cd client # direct to the right folder
$ npm install # install all dependencies
$ npm start # run the app
(Please insert your own API KEY in HomePage.jsx before you run the project)
```

To run the tests in `Conversion.test.js`:

```
$ npm test # run the tests
```
