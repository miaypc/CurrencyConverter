import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import from other files
import Header from "../components/Header";
import Converter from "../components/Converter";
import Color from "../utils/Color";
import { dataToConversion } from "../utils/Coversion";
import { addConversionToLocalStorage } from "../utils/LocalStorage";

// styled elements
const HomePageContainer = styled.div`
  background-color: ${Color.Grey};
  height: 100vh;
  position: relative;
`;
const ViewHistoryText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${Color.Dark};
  margin: 24px 60px 0 1084px;
`;

const ResultContainer = styled.div`
  height: 78px;
  width: 237px;
  color: ${Color.Dark};
  margin: 90px 933px 0 110px;
`;

const FromCurrenyText = styled.p`
  font-size: 20px;
  line-height: 23px;
  margin: 0;
`;
const ToCurrenyText = styled.p`
  font-size: 40px;
  line-height: 47px;
  font-weight: 700;
  margin: 8px 0 0 0;
`;

function HomePage() {
  // check input invalidation
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  //select currencies
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  //result
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);

  // check input invalidation
  const handleInputChange = (event) => {
    setInput(event.target.value);
    if (
      !event.target.value
        .trim()
        .match(/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$/)
    ) {
      setError("Please provide a valid number");
    } else {
      setError(null);
    }
    setShowResult(false);
  };

  //select and switch currencies
  const handleSelectFromCurrency = (event) => {
    setFromCurrency(event.target.value);
    setShowResult(false);
  };
  const handleSelectToCurrency = (event) => {
    setToCurrency(event.target.value);
    setShowResult(false);
  };
  const switchCurrencies = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setShowResult(false);
  };

  // fetch api
  const API_KEY = process.env.REACT_APP_OPENEXCHANGERATES_API_KEY; 

  // const getConversion = async () => {
  //   return await fetch(
  //     `http://api.currencylayer.com/live?access_key=${API_KEY}&currencies=${fromCurrency},${toCurrency}&format=1`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return dataToConversion(data, input, fromCurrency, toCurrency);
  //     });
  // };

  const getConversion = async () => {
    return await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        return dataToConversion(data, input, fromCurrency, toCurrency);
      });
  };

  const updateWithConversion = (conversion) => {
    setResult(conversion.toValue);
    setShowResult(true);
  };

  const getResult = async () => {
    if (error == null) {
      const conversion = await getConversion();
      updateWithConversion(conversion);
      addConversionToLocalStorage(conversion);
    } else {
      setError("Please provide a valid number");
    }
  };

  return (
    <HomePageContainer>
      <Header />
      <Converter
        error={error}
        handleInputChange={handleInputChange}
        input={input}
        handleSelectFromCurrency={handleSelectFromCurrency}
        handleSelectToCurrency={handleSelectToCurrency}
        switchCurrencies={switchCurrencies}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        getResult={getResult}
      />
      <Link to="/history" style={{ textDecoration: "none" }}>
        <ViewHistoryText>View conversion history &#62;</ViewHistoryText>
      </Link>
      {showResult ? (
        <ResultContainer>
          <FromCurrenyText>
            {parseFloat(input).toPrecision()} {fromCurrency} &#61;
          </FromCurrenyText>
          <ToCurrenyText>
            {result} {toCurrency}
          </ToCurrenyText>
        </ResultContainer>
      ) : (
        ""
      )}
    </HomePageContainer>
  );
}

export default HomePage;
