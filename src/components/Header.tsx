import React, { Fragment } from "react";
import BatmanIcon from "./BatmanIcon";

export const Header: React.FC = () => (
  <Fragment>
    <header>
      <h1 className="logo">
        <span>Batman</span>
        <BatmanIcon />
        <span>Movies</span>
      </h1>
    </header>
    <style jsx>{`
      header {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        text-transform: uppercase;
        color: #242424;
        font-size: 1.8em;
        line-height: 0;
        letter-spacing: 1px;
      }
      @media screen and (max-width: 576px) {
        .logo {
          margin: 2em 0 0;
          flex-direction: column;
        }
      }
    `}</style>
  </Fragment>
);

export default Header;
