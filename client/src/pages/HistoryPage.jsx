import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import from other files
import PickarLogo from "../image/Logo.png";
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
const LogoHistoryPage = styled.img`
  //width: 99.8px; changed to match to the design
  width: 99px;
  height: 35px;
  margin: 40px 1120.2px 0 60px;
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
      <LogoHistoryPage src={PickarLogo} alt="Pickar Logo" />
      <Link to="/" style={{ textDecoration: "none" }}>
        <GoBackText> &#60; Go back </GoBackText>
      </Link>
      <History />
    </HistoryPageContainer>
  );
}

export default HistoryPage;
