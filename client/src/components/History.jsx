import React from "react";
import styled from "styled-components";

//import from other files
import Color from "../utils/Color";
import { getConversions } from "../utils/LocalStorage";

// styled elements
const HistoryContainer = styled.div`
  width: 1160px;
  height: 259px;
  margin: 40px 60px 0 60px;
  display: flex;
  flex-direction: column;
`;
const HistoryTitleContainer = styled.div`
  height: 14px;
  width: 734.16px;
  margin-left: 80px;
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
`;
const HistoryTitleText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${Color.White};
  opacity: 0.5;
  margin: 0;
`;
const HistoryDetailContainer = styled.div`
  height: 59px;
  width: 1160px;
  margin-bottom: 20px;
  background-color: ${Color.White};
  color: ${Color.Dark};
  border-radius: 15px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const HistoryDetailTextContainer = styled.div`
  width: 360px;
  height: 19px;
  margin: 20px 0 20px 0;
`;
const HistoryDetailText = styled.p`
  font-size: 16px;
  line-height: 19px;
  margin: 0;
`;

function History() {
  let savedConversions = getConversions();
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

  return (
    <HistoryContainer>
      <HistoryTitleContainer>
        <HistoryTitleText>Date</HistoryTitleText>
        <HistoryTitleText>From</HistoryTitleText>
        <HistoryTitleText>To</HistoryTitleText>
      </HistoryTitleContainer>
      {savedConversions.map((e, i) => {
        return (
          <HistoryDetailContainer key={i}>
            <HistoryDetailTextContainer>
              <HistoryDetailText>
                {e.date.toLocaleDateString("en-US", dateOptions)}
              </HistoryDetailText>
            </HistoryDetailTextContainer>
            <HistoryDetailTextContainer>
              <HistoryDetailText>
                {e.fromValue} {e.fromCurrency}
              </HistoryDetailText>
            </HistoryDetailTextContainer>
            <HistoryDetailTextContainer>
              <HistoryDetailText>
                {e.toValue} {e.toCurrency}
              </HistoryDetailText>
            </HistoryDetailTextContainer>
          </HistoryDetailContainer>
        );
      })}
    </HistoryContainer>
  );
}

export default History;
