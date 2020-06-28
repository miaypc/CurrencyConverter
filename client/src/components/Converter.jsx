import React from "react";
import styled from "styled-components";

//import from other files
import Color from "../utils/Color";
import Path from "../image/Path.png";
import Switcher from "../image/Switcher.png";

// styled elements
const ConverterContainer = styled.div`
  height: 128px;
  width: 905px;
  border-radius: 15px;
  background-color: ${Color.White};
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
  margin-left: 60px;
  position: absolute;
  top: 336px;
  display: flex;
  flex-direction: row;
`;
// for amount
const AmountContainer = styled.div`
  height: 64px;
  width: 200px;
  color: ${Color.Dark};
  margin-left: 40px;
  margin-top: 28px;
`;
const InputTitle = styled.p`
  font-size: 12px;
  line-height: 14px;
  margin: 0 0 10px 8px;
`;

const ErrorMessage = styled(InputTitle)`
  color: ${Color.Red};
  margin: 5px 0 10px 8px;
`;
const AmountInput = styled.input`
  font-family: inherit;
  background-color: rgba(54, 58, 62, 0.08);
  height: 40px;
  width: 184px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  line-height: 19px;
  color: ${Color.Dark};
  padding: 0 0 0 16px;
`;
// for from and to
const FromContainer = styled(AmountContainer)`
  margin-left: 24px;
`;
const ToContainer = styled(AmountContainer)`
  margin-left: 16px;
`;

const FromSelect = styled.select`
  font-family: inherit;
  height: 40px;
  width: 200px;
  border-radius: 8px;
  border: none;
  background-color: ${Color.Cream};
  padding: 0 0 0 16px;
  color: ${Color.Dark};
  font-size: 16px;
  line-height: 19px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const ArrowSign = styled.img`
  height: 6px;
  width: 12px;
  position: absolute;
  margin-left: 172px;
  margin-top: 18px;
`;

// const ArrowSign = styled.path`
//   box-sizing: border-box;
//   height: 6px;
//   width: 12px;
//   border: 2px solid ${Color.Dark};
//   margin-left: 172px;
//   position: absolute;
//   //margin-top: 18px;
// `;
const FromOption = styled.option`
  margin-left: 19px;
  font-size: 16px;
  line-height: 19px;
`;

const ToSelect = styled(FromSelect)``;
const ToOption = styled(FromOption)``;

const SwicherSign = styled.img`
  width: 12px;
  height: 12px;
  margin-top: 67px;
  margin-left: 16px;
  cursor: pointer;
`;
// for button

const ConvertButton = styled.button`
  font-family: inherit;
  width: 117px;
  height: 40px;
  background-color: ${Color.Red};
  text-align: center;
  border-radius: 8px;
  border: none;
  color: ${Color.White};
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  margin-top: 52px;
  margin-left: 40px;
`;
const currencies = ["EUR", "USD", "CHF"];

function Converter({
  input,
  error,
  handleInputChange,
  handleSelectFromCurrency,
  handleSelectToCurrency,
  switchCurrencies,
  fromCurrency,
  toCurrency,
  getResult,
}) {
  return (
    <ConverterContainer>
      <AmountContainer>
        <InputTitle>Amount</InputTitle>
        <AmountInput value={input} onChange={handleInputChange} />
        {error && <ErrorMessage> {error}</ErrorMessage>}
      </AmountContainer>

      <FromContainer>
        <InputTitle>From</InputTitle>
        <ArrowSign src={Path} alt="Arrow sign for select" />
        <FromSelect onChange={handleSelectFromCurrency} value={fromCurrency}>
          {currencies.map((currency) => {
            return <FromOption>{currency}</FromOption>;
          })}
        </FromSelect>
      </FromContainer>

      <SwicherSign
        src={Switcher}
        alt="Switcher sign"
        onClick={() => switchCurrencies()}
      />

      <ToContainer>
        <InputTitle>To</InputTitle>
        <ArrowSign src={Path} alt="Arrow sign for select" />
        {/* <ArrowSign /> */}
        <ToSelect onChange={handleSelectToCurrency} value={toCurrency}>
          {currencies.map((currency) => {
            return <ToOption>{currency}</ToOption>;
          })}
        </ToSelect>
      </ToContainer>
      <ConvertButton onClick={getResult}>Convert</ConvertButton>
    </ConverterContainer>
  );
}

export default Converter;
