let dateOptions = { year: "numeric", month: "long", day: "numeric" };

export class Conversion {
  constructor(
    fromValue,
    fromCurrency,
    toValue,
    toCurrency,
    date = new Date().toLocaleDateString("en-US", dateOptions)
  ) {
    this.fromValue = fromValue;
    this.fromCurrency = fromCurrency;
    this.toValue = toValue;
    this.toCurrency = toCurrency;
    this.date = date;
  }
}

export const dataToConversion = (
  data,
  input,
  fromCurrency,
  toCurrency,
  date
) => {
  const usdToCurrency = `USD${toCurrency}`;
  const currencyToUSD = `USD${fromCurrency}`;
  const usdToCurrencyRate = data.quotes[usdToCurrency];
  const currencyToUSDRate = data.quotes[currencyToUSD];
  const convertedValue = (
    `${input}` *
    (`${usdToCurrencyRate}` / `${currencyToUSDRate}`)
  ).toFixed(5);

  return new Conversion(input, fromCurrency, convertedValue, toCurrency, date);
};
