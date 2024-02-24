import React from "react";

const CardItem = (props) => {
  return (
    <div className="grid-container">
      <div className="card">
        <div className="item-bg">
          <h3>Planet Name: {props.name}</h3>
        </div>
        <div className="info">
          <p>Climate: {props.climate}</p>
          <p>Population: {props.population}</p>
          <p>Terrain: {props.terrain}</p>
          <p>Diameter: {props.diameter}</p>
          <div>
            <h4>Residents:</h4>
            <a href={props.residents} target="_blank" rel="noopener noreferrer">
              <button>View Residents</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
