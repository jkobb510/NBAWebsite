import React from "react";
import "./CardButton.css";

//make image a parameter
function CardButton({title, onClick, imgSrc }) {
  return (
    <button className="card-button" onClick={onClick}>         
      <div className="card-image-container"> 
        <img src={imgSrc} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        {title}
      </div>
    </button>
  );
}

export default CardButton;