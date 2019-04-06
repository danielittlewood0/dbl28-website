import React from 'react';
import './Navbar.css';

function Navbar(props){
  return (
    <nav>
      <NavLink handler={props.handler} page="1"/>
      <NavLink handler={props.handler} page="2"/>
      <NavLink handler={props.handler} page="3"/>
      <NavLink handler={props.handler} page="4"/>
      <NavLink handler={props.handler} page="5"/>
    </nav>
  )
}

function NavLink(props){
  return (
    <a href="#" name={props.page} onClick={() => props.handler(props.page)}> {props.page} </a>
  )
}

export default Navbar;
