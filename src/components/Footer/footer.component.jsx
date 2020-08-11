import React from 'react';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import codepen from '../../assets/icons/codepen.svg';
import twitter from '../../assets/icons/twitter.svg';

import './footer.styles.css';

const Footer = () => (
  <footer id='footer' className="footer" >
    <h3>Let's get in touch</h3>
    <p>Feel free to contact me. Currently I'm available for new exciting projects, I'll be glad to work with you!</p>
    <a href="mailto:dargap3@gmail.com" className="footer__link">dargap3@gmail.com</a>
    <ul className="social-list">
      <li className="social-list__item">
        <a target='blank' className="social-list__link" href="https://www.linkedin.com/in/diego-a-ram%C3%B3n-giraldo-b072b1108/" rel="noopener noreferrer">
          <object data={linkedin} type="image/svg+xml">
            <img src={linkedin} alt='linkedin logo' />          
          </object>
        </a>
      </li>
      <li className="social-list__item">
        <a target='blank' className="social-list__link" href="https://github.com/dargap3" rel="noopener noreferrer">
          <object data={github} type="image/svg+xml">
            <img src={github} alt='github logo' />
          </object>          
        </a>
      </li>
      <li className="social-list__item">
        <a target='blank' className="social-list__link" href="https://codepen.io/dargap" rel="noopener noreferrer">
          <object data={codepen} type="image/svg+xml">
            <img src={codepen} alt='codepen logo' />
          </object>          
        </a>
      </li>
      <li className="social-list__item">
        <a target='blank' className="social-list__link" href="https://twitter.com/dargap38" rel="noopener noreferrer">
          <object data={twitter} type="image/svg+xml">
            <img src={twitter} alt='twitter logo' />
          </object>          
        </a>
      </li>
    </ul>
  </footer>

);

export default Footer;