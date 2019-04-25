import React from 'react';
import Placeholder from './Placeholder';
import LifeBoard from './js-life/src/LifeBoard.js';
import './Life.css';

function Life(){
  return (
    <div>
      <h1> Conway's Game of Life.</h1>
      <div className="life-container">
        <LifeBoard width={5} height={5}/>
      </div>
    </div>
  )
}

export default Life;

