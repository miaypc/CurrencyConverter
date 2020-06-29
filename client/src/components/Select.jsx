import React from "react";
import styled from "styled-components";

//import from other files
import Color from "../utils/Color";
import Path from "../image/Path.png";

// styled elements

const SelectContainer = styled.div`
  height: 64px;
  width: 200px;
  color: ${Color.Dark};
  margin-left: 15px;
  margin-top: 28px;
`;
const SelectTitle = styled.p`
  font-size: 12px;
  line-height: 14px;
  margin: 0 0 10px 8px;
`;

const SelectBox = styled.select`
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
const Option = styled.option`
  margin-left: 19px;
  font-size: 16px;
  line-height: 19px;
`;
const ArrowSign = styled.img`
  position: absolute;
  //   height: 6px; changed to match to the design
  //   width: 12px;
  //   margin-left: 172px;
  //   margin-top: 18px;
  height: 8px;
  width: 14px;
  margin-left: 171px;
  margin-top: 17px;
`;
const currencies = ["EUR", "USD", "CHF"];

function Select({ title, onChangeFunction, value }) {
  return (
    <SelectContainer>
      <SelectTitle>{title}</SelectTitle>
      <ArrowSign src={Path} alt="Arrow sign for select" />
      <SelectBox onChange={onChangeFunction} value={value}>
        {currencies.map((currency, i) => {
          return <Option key={i}>{currency}</Option>;
        })}
      </SelectBox>
    </SelectContainer>
  );
}
export default Select;
