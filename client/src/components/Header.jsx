import React from "react";
import styled from "styled-components";

//import from other files
import Color from "../utils/Color";

// styled elements
const HeaderContainer = styled.div`
  background-color: ${Color.Dark};
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  color: ${Color.White};
  margin: 160px 650px 0 60px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Convert currencies in real-time.</Title>
    </HeaderContainer>
  );
}

export default Header;
