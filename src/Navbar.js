import React from 'react';
import './Navbar.css';

function Navbar(props){
  return (
    <nav>
      <a href="#" onClick={() => props.follow("1")}> bing </a>
      <a href="#" onClick={() => props.follow("2")}> bing </a>
      <a href="#" onClick={() => props.follow("3")}> bing </a>
      <a href="#" onClick={() => props.follow("4")}> bing </a>
      <a href="#" onClick={() => props.follow("5")}> bing </a>
    </nav>
  )
}

export default Navbar;
