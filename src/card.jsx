import React from 'react';

const Card = ({eng, jap, pro, isFlipped, onClick}) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <h2 className="card-text">{jap}</h2>
          <h3 className="card-text">{`(${pro})`}</h3>
        </div>
        <div className="card-back">
          <h2 className="card-text">{`${eng} `}</h2>
        </div>
      </div>
    </div>
  )
}


export default Card;
