import React from "react";
import "./Character.css";
const Character = (props) => {
  return (
    <>
      <div className="infoContext font">
        <h1>{props.character}</h1>
      </div>
      <div className="icon/f"></div>
    </>
  );
};

export default Character;
