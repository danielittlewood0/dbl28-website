import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Life from './Life.js';
import About from './About.js';
import Work from './Work.js';
import Interests from './Interests.js';
import Contact from './Contact.js';
import Navbar from './Navbar.js';

const routing = (
  <Router>
    <Route path="/" component={Navbar}/>
    <Route path="/life" component={Life} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/interests" component={Interests} />
    <Route path="/contact" component={Contact} />
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

