import React from "react";
import Header from "./Header";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Libre Baskerville, serif";
    font-size: 15px;
    color: #242424;
    background: #d7d7d7;
  }
`;

const StyledDiv = styled.div`
  padding: 3em;
`;

interface ILayoutProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <StyledDiv>{children}</StyledDiv>
  </React.Fragment>
);

export default Layout;
