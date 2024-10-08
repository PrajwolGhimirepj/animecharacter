import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.src} alt="" />
        <div className="info font">{props.context}</div>
      </div>
    </>
  );
};

export default Card;
