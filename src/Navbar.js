import React from 'react';
import './Navbar.css';

function Navbar(props){
  return (
    <nav>
      <NavLink handler={props.handler} page="About"/>
      <NavLink handler={props.handler} page="Work"/>
      <NavLink handler={props.handler} page="Life"/>
      <NavLink handler={props.handler} page="Interests"/>
      <NavLink handler={props.handler} page="Contact"/>
    </nav>
  )
}

function NavLink(props){
  return (
    <a href={props.page.toLowerCase()} name={props.page} onClick={() => props.handler(props.page)}> {props.page} 
      <div className="underline"> </div>
    </a>
  )
}

export default Navbar;
