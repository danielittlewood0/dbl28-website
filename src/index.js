import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Life from './Life.js';
import About from './About.js';
import Work from './Work.js';
import Interests from './Interests.js';
import Contact from './Contact.js';
import Page from './Page.js';

const routing = (
  <Router>
    <div>
      <Route path="/" component={Page} />
      <Route path="/life" component={Life} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/interests" component={Interests} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

