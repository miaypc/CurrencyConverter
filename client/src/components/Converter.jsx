import React from "react";
import styled from "styled-components";

//import from other files
import Color from "../utils/Color";
import Switcher from "../image/Switcher.png";
import Select from "./Select";

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
  margin-right: 9px;
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

// for switcher
const SwicherSign = styled.img`
  cursor: pointer;
  // width: 12px; changed to match to the design
  // height: 12px;
  // margin-top: 67px;
  // margin-left: 16px;
  width: 14px;
  height: 14px;
  margin-top: 66px;
  margin-left: 15px;
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
      <Select
        title="From"
        value={fromCurrency}
        onChangeFunction={handleSelectFromCurrency}
      />
      <SwicherSign
        src={Switcher}
        alt="Switcher sign"
        onClick={() => switchCurrencies()}
      />
      <Select
        title="To"
        value={toCurrency}
        onChangeFunction={handleSelectToCurrency}
      />
      <ConvertButton onClick={getResult}>Convert</ConvertButton>
    </ConverterContainer>
  );
}

export default Converter;
