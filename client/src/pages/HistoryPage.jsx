import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import from other files
import Color from "../utils/Color";
import History from "../components/History";
// styled elements

const HistoryPageContainer = styled.div`
  background-color: ${Color.Dark};
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Title = styled.h1`
  color: ${Color.White};
  margin-top: 40px;
  text-align:center;
`;


const GoBackText = styled.p`
  color: ${Color.White};
  font-size: 12px;
  line-height: 14px;
  margin: 50px 1167px 0 60px;
`;
function HistoryPage() {
  return (
    <HistoryPageContainer>
      <Title>Conversion History</Title>
      <Link to="/" style={{ textDecoration: "none" }}>
        <GoBackText> &#60; Go back </GoBackText>
      </Link>
      <History />
    </HistoryPageContainer>
  );
}

export default HistoryPage;
