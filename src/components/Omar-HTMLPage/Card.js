import React from "react";

function Card({ imgSrc, altText, title, description, link, buttonText, buttonClass }) {
  return (
    <div className={`card ${buttonClass}`}>
      <img src={imgSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="button">
        {buttonText}
      </a>
    </div>
  );
}

export default Card;
