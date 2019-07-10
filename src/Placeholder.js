import React, { Component } from 'react';
import "./Placeholder.css"
import logo from "./empty-set.svg"

class Placeholder extends Component {
  render() {
    return (
      <div className="Placeholder">
      <div className="message">
        <p>
          Welcome to my website! Currently under construction, please don't
          look behind the curtain.
        </p>
      </div>
      <div align="center">
        <object type="image/svg+xml" data={logo} alt="emptyset">
          Your browser does not support SVG
        </object>
      </div>
      </div>
    );
  }
}

export default Placeholder;

