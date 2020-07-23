import React, { useState } from 'react';

import logo from '../../assets/logo/Dar.Dev-logo.png';

import './header.styles.css';

const Header = () => {
  const [display, setDisplay] = useState(false);
  const handleTogle = () => setDisplay(!display);
  const handleClose = () => setDisplay(false);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button
        onClick={handleTogle}               
        className={`nav-toggle ${ display ? 'nav-open' : '' }`}
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a onClick={handleClose} href="#about" className="nav__link">About me</a></li>
          <li className="nav__item"><a onClick={handleClose} href="#work" className="nav__link">Projects</a></li>
          <li className="nav__item"><a onClick={handleClose} href="#footer" className="nav__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;