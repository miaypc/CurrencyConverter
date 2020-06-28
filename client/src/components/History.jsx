import React from "react";
import styled from "styled-components";

//import from other files
import Color from "../utils/Color";

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
  margin-bottom: 8px;
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
  margin-top: 20px;
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
  return (
    <HistoryContainer>
      <HistoryTitleContainer>
        <HistoryTitleText>Date</HistoryTitleText>
        <HistoryTitleText>From</HistoryTitleText>
        <HistoryTitleText>To</HistoryTitleText>
      </HistoryTitleContainer>
      <HistoryDetailContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>June 25, 2020</HistoryDetailText>
        </HistoryDetailTextContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>1.00 EUR</HistoryDetailText>
        </HistoryDetailTextContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>1.12392 USD</HistoryDetailText>
        </HistoryDetailTextContainer>
      </HistoryDetailContainer>
      <HistoryDetailContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>June 25, 2020</HistoryDetailText>
        </HistoryDetailTextContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>1.00 EUR</HistoryDetailText>
        </HistoryDetailTextContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>1.12392 USD</HistoryDetailText>
        </HistoryDetailTextContainer>
      </HistoryDetailContainer>
      <HistoryDetailContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>June 25, 2020</HistoryDetailText>
        </HistoryDetailTextContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>1.00 EUR</HistoryDetailText>
        </HistoryDetailTextContainer>
        <HistoryDetailTextContainer>
          <HistoryDetailText>1.12392 USD</HistoryDetailText>
        </HistoryDetailTextContainer>
      </HistoryDetailContainer>
    </HistoryContainer>
  );
}

export default History;
