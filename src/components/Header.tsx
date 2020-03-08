import React from "react";
import styled from "styled-components";
import BatmanIcon from "./BatmanIcon";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    text-transform: uppercase;
    font-size: 1.8em;
    line-height: 0;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      margin: 2em 0 0;
      flex-direction: column;
    }
  }
`;

export const Header: React.FC = () => (
  <React.Fragment>
    <StyledHeader>
      <h1>
        <span>Batman</span>
        <BatmanIcon />
        <span>Movies</span>
      </h1>
    </StyledHeader>
  </React.Fragment>
);

export default Header;
