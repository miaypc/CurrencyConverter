import {
  dataToConversion,
  Conversion,
  localStorageToConversion,
} from "./Coversion";

const date = new Date(2020, 6, 29, 22, 0, 0);

// test function dataToConversion()
test("should have date if one isn't passed into dataToConversion", () => {
  const conversion = dataToConversion(
    { quotes: { USDUSD: 1, USDEUR: 0.891421 } },
    "2",
    "USD",
    "EUR"
  );
  expect(conversion.date).not.toBeNull();
});

test("should return correct coversion from USD to EUR", () => {
  expect(
    dataToConversion(
      { quotes: { USDUSD: 1, USDEUR: 0.891421 } },
      "2",
      "USD",
      "EUR",
      date
    )
  ).toEqual({
    date: date,
    fromCurrency: "USD",
    fromValue: "2",
    toCurrency: "EUR",
    toValue: "1.78284",
  });
});

test("should return correct coversion from EUR to USD", () => {
  expect(
    dataToConversion(
      { quotes: { USDEUR: 0.889702, USDUSD: 1 } },
      "1",
      "EUR",
      "USD",
      date
    )
  ).toEqual({
    date: date,
    fromCurrency: "EUR",
    fromValue: "1",
    toCurrency: "USD",
    toValue: "1.12397",
  });
});

test("should return correct coversion from EUR to CHF", () => {
  expect(
    dataToConversion(
      { quotes: { USDEUR: 0.889702, USDCHF: 0.951275 } },
      "10",
      "EUR",
      "CHF",
      date
    )
  ).toEqual({
    date: date,
    fromCurrency: "EUR",
    fromValue: "10",
    toCurrency: "CHF",
    toValue: "10.69206",
  });
});

test("should return correct coversion from CHF to EUR", () => {
  expect(
    dataToConversion(
      { quotes: { USDCHF: 0.951275, USDEUR: 0.889702 } },
      "2002",
      "CHF",
      "EUR",
      date
    )
  ).toEqual({
    date: date,
    fromCurrency: "CHF",
    fromValue: "2002",
    toCurrency: "EUR",
    toValue: "1872.41692",
  });
});

//test function localStorageToConversion()
test("should return correct version of date", () => {
  expect(
    localStorageToConversion({
      fromValue: "10",
      fromCurrency: "EUR",
      toValue: "10.69206",
      toCurrency: "CHF",
      date: "2020-06-29T20:27:57.000Z",
    })
  ).toEqual(
    new Conversion(
      "10",
      "EUR",
      "10.69206",
      "CHF",
      new Date("2020-06-29T20:27:57.000Z")
    )
  );
});
