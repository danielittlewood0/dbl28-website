import React from 'react';
import './Navbar.css';

function Navbar(props){
  return (
    <nav>
      <NavLink handler={props.handler} page="about"/>
      <NavLink handler={props.handler} page="work"/>
      <NavLink handler={props.handler} page="life"/>
      <NavLink handler={props.handler} page="interests"/>
      <NavLink handler={props.handler} page="contact"/>
    </nav>
  )
}

function NavLink(props){
  return (
    <a href=props.page name={props.page} onClick={() => props.handler(props.page)}> {props.page} </a>
  )
}

export default Navbar;
