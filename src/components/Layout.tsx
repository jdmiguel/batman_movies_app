import React, { Fragment } from "react";
import Header from "./Header";

import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 3em;
`;

interface ILayoutProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <Fragment>
    <Header />
    <StyledDiv>{children}</StyledDiv>
  </Fragment>
);

export default Layout;
