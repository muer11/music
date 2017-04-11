import React, { Component } from 'react';
import logo from '../images/logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="music-header">
        <span>
           <img src={logo} alt="logo"/>
        </span>  
      </header>
    );
  }
}

export default Header;
