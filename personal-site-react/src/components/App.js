import React, { Component } from 'react';

import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import logo from '../img/logo.svg';
import '../css/skeleton_css/skeleton.css';
import '../css/skeleton_css/normalize.css';
import '../css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav className="Nav" />
          <About className="About" />
          <Portfolio className="Portfolio" />
          <Contact className="Contact" />
          <Footer className="Footer" />
      </div>
    );
  }
}

export default App;