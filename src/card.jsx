import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.store} className="card-image" />
      <div className="card-content">
        <h2 className="card-store">{props.store}</h2>
        <p className="card-location">{props.location}</p>
      </div>
    </div>
  )
}


export default Card;
