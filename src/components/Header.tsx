import React, { Fragment } from "react";
import BatmanIcon from "./BatmanIcon";
import styled from "styled-components";

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
    color: #242424;
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
  <Fragment>
    <StyledHeader>
      <h1>
        <span>Batman</span>
        <BatmanIcon />
        <span>Movies</span>
      </h1>
    </StyledHeader>
  </Fragment>
);

export default Header;
