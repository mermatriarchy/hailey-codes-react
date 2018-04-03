import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
        <nav className="Nav blue">
        		{/*Email/GitHub sticky icons*/}
     			 <ul className="hide-on-med-and-down contact-top">
     				<li id="contact-one" className="blue-dark">
        				<a href="mailto:h.adonismiller@gmail.com">
        				<i className="fa fa-envelope-square fa-2x white-text" aria-hidden="true"></i></a></li>
      				<li id="contact-two" className="blue-dark">
        				<a href="https://github.com/mermatriarchy">
        				<i className="fa fa-github fa-2x white-text"></i></a></li>
       				 <div id="contact-style"></div>
        		</ul>

        {/*Navigation*/}
        	<h1 id="top" className="white-text">Hailey Miller Codes Things</h1>
             <div className="container">
            	<ul className="row">
                  <li className="three columns"></li>
              		<li className="two columns"> <a href="#about" className="white-text">About</a></li>
              		<li className="two columns"> <a href="#portfolio" className="white-text">Portfolio</a></li>
              		<li className="two columns"> <a href="#contact" className="white-text">Contact</a></li>
          		</ul>  
            </div>  
      	</nav>
    );
  }
}

export default Nav;

