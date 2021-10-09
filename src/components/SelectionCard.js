import React from "react";
import "./SelectionCard.css";

const SelectionCard = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default SelectionCard;
