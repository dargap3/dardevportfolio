import React from 'react';

import aboutImg from '../../assets/img/WhatsApp Image 2020-06-23 at 11.16.51 PM.jpeg';

import './about.styles.css';

const About = () => (
  <section className="about-me" id="about">
    <h2 className="section__title section__title--about">Who I am</h2>
    <p className="section__subtitle section__subtitle--about">A civil engineer who codes.</p>
           
    <div className="about-me__body">
      <p>I'm a front-end React Developer based in Medellín, with 1 year of experience working as a freelance and building web apps.</p>
      <p>Passionate to learn cool stuff in order to give them a new approach make it them uniques, I believe I'm a problem solver!</p>
    </div>
           
    <img src={aboutImg} alt="Diego Ramón smiling" className={'about-me__img'} />
  </section>
);

export default About;