import React from "react";
import "./css/header.css";
const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
