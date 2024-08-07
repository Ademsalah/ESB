import React from "react";
import "../products/Card.css";

const Card = ({ userName, address, image, email, phoneNum, cin, click }) => {
  return (
    <div className="card" onClick={() => click()}>
      {image && <img src={image} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{userName}</h2>
        <p className="card-category">{address}</p>
        <p className="card-description">{email}</p>
        <p className="card-price">{phoneNum}</p>
        <p className="card-price">{cin}</p>
      </div>
    </div>
  );
};

export default Card;
