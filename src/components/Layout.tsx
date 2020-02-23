import React, { Fragment } from "react";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => (
  <Fragment>
    <Header />
    <div className="content">{children}</div>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: "Open Sans";
        font-size: 15px;
        background: #c5c4c4;
        overflow-x: hidden;
      }
      .content {
        padding: 3em;
      }
    `}</style>
  </Fragment>
);

export default Layout;
