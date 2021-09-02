import React from "react";

const Card = (props) => {
  const fullName = props.fName + " " + props.lName;
  return (
    <div className="card">
      <div className="top">
        <h4 className="name">{fullName}</h4>
        <img className="circle-img" src={props.img} alt={props.fName} />
      </div>
      <div className="bottom">
        <p className="info">{props.email}</p>
        <p className="info">+543 432 231</p>
      </div>
    </div>
  );
};

export default Card;
