import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Placeholder from './Placeholder';
import Navbar from './Navbar';

function ping(str){
  console.log(str)
}

ReactDOM.render(
  <div>
    <Navbar follow={str => ping(str)}/>
    <Placeholder />
  </div>, 
  document.getElementById('root')
);

