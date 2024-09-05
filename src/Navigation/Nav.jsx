import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    <>
      <div className="nav">
        <img src={props.src} alt="" />
      </div>
    </>
  );
};
export default Nav;
