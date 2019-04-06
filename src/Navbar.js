import React from 'react';
import './Navbar.css';

function Navbar(props){
  return (
    <nav>
      <NavLink handler={props.handler} page="About"/>
      <NavLink handler={props.handler} page="Work"/>
      <NavLink handler={props.handler} page="Maths"/>
      <NavLink handler={props.handler} page="Interests"/>
      <NavLink handler={props.handler} page="Contact"/>
    </nav>
  )
}

function NavLink(props){
  return (
    <a href="#" name={props.page} onClick={() => props.handler(props.page)}> {props.page} </a>
  )
}

export default Navbar;
