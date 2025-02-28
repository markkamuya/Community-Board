// src/Card.jsx
import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3> {/* Using props to display the language name */}
      <p>{props.description}</p> {/* Using props to display the description */}
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button>Go to Documentation</button> {/* Using props for the link */}
      </a>
    </div>
  );
};

export default Card;
