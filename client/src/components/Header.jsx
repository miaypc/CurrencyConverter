import React from "react";
import styled from "styled-components";

//import from other files
import Color from "../utils/Color";
import PickarLogo from "../image/Logo.png";

// styled elements
const HeaderContainer = styled.div`
  background-color: ${Color.Dark};
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  //width: 99.8px; changed to match to the design
  width: 99px;
  height: 35px;
  margin: 40px 1120.2px 0 60px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  color: ${Color.White};
  margin: 124px 650px 0 60px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={PickarLogo} alt="Pickar Logo" />
      <Title>Convert currencies in real-time.</Title>
    </HeaderContainer>
  );
}

export default Header;
