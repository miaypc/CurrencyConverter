import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "typeface-roboto";

//import from other files
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
// styled elements

const AppContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
  box-shadow: 0 0 44px 0 rgba(0, 0, 0, 0.28);
  font-family: Roboto, Arial, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/history" component={HistoryPage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
