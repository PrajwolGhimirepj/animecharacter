import React from "react";
import "./SideNav.css";

const SideNav = (props) => {
  return (
    <>
      <div className="sidecard">
        <img src={props.scr} alt="" />
      </div>
    </>
  );
};
export default SideNav;
