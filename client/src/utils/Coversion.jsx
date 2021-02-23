export class Conversion {
  constructor(fromValue, fromCurrency, toValue, toCurrency, date = new Date()) {
    this.fromValue = fromValue;
    this.fromCurrency = fromCurrency;
    this.toValue = toValue;
    this.toCurrency = toCurrency;
    this.date = date;
  }
}

export const localStorageToConversion = (object) => {
  object.date = new Date(object.date);
  return object;
};

//   const usdToCurrency = `USD${toCurrency}`;
//   const currencyToUSD = `USD${fromCurrency}`;

export const dataToConversion = (
  data,
  input,
  fromCurrency,
  toCurrency,
  date
) => {
  const usdToCurrency = `${toCurrency}`;
  const currencyToUSD = `${fromCurrency}`;
  const usdToCurrencyRate = data.rates[usdToCurrency];
  const currencyToUSDRate = data.rates[currencyToUSD];
  const convertedValue = (
    `${input}` *
    (`${usdToCurrencyRate}` / `${currencyToUSDRate}`)
  ).toFixed(5);

  return new Conversion(input, fromCurrency, convertedValue, toCurrency, date);
};