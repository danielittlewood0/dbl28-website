import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Placeholder from './Placeholder';
import Navbar from './Navbar';
import Content from './Content';

function ping(str){
  var content = document.getElementById('#content')
  console.log(content)
}

ReactDOM.render(
  <div>
    <Navbar handler={str => ping(str)}/>
    <Content />
  </div>, 
  document.getElementById('root')
);

