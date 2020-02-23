import React, { Fragment } from "react";
import Header from "./Header";

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = ({ children }): React.ReactElement => {
  return (
    <Fragment>
      <Header />
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Libre Baskerville, serif";
          font-size: 15px;
          background: #c5c4c4;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
