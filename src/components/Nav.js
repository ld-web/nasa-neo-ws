import React from "react";
import logo from '../img/NASA-logo.png'

const Nav = () => (
  <nav className="uk-navbar-container uk-margin" uk-navbar="true">
    <div className="uk-navbar-center">
      <div className="uk-navbar-center-left">
      </div>
      <a className="uk-navbar-item uk-logo" href="/">
        <img src={logo} alt="NASA"/>
      </a>
      <div className="uk-navbar-center-right">
      </div>
    </div>
  </nav>
);

export default Nav;
