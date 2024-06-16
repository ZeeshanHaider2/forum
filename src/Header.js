import React from "react";
import "./App.css";
const Header = (props) => {
  return (
    <>
      <img src={props.profileImg} alt="" />
      <h1>{props.username}</h1>
    </>
  );
};

export default Header;
