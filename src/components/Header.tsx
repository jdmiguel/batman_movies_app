import React from "react";
import BatmanIcon from "./BatmanIcon";

export const Header: React.FC = () => (
  <header>
    <h1 className="logo">
      <span>Batman</span>
      <BatmanIcon />
      <span>Movies</span>
    </h1>
  </header>
);

export default Header;
