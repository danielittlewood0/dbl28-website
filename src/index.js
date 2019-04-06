import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Placeholder from './Placeholder';
import Navbar from './Navbar';
import Content from './Content';

function ping(str){
  console.log(str)
}

ReactDOM.render(
  <div>
    <Navbar follow={str => ping(str)}/>
    <Content/>
  </div>, 
  document.getElementById('root')
);

