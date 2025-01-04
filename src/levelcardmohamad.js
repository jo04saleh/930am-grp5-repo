import React from 'react';
import './LevelCard.css';

const LevelCard = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img src={`/img/${image}`} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer"> Learn</a>
    </div>
  );
};

export default LevelCard;
