import React, { Component } from 'react';
import "./Placeholder.css"
import emptyset from "./empty-set.png"

class Placeholder extends Component {
  render() {
    return (
      <div className="Placeholder">
      <img src={emptyset}/>
        <p>
          Welcome to my website! Currently under construction, please don't
          look behind the curtain.
        </p>
      </div>
    );
  }
}

export default Placeholder;

