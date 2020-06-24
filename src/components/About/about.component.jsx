import React from 'react';

import aboutImg from '../../assets/img/WhatsApp Image 2020-06-23 at 11.16.51 PM.jpeg';

import './about.styles.css';

const About = () => (
  <section className="about-me" id="about">
    <h2 className="section__title section__title--about">Who I am</h2>
    <p className="section__subtitle section__subtitle--about">A civil engineer who codes.</p>
           
    <div className="about-me__body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum fugiat voluptas saepe, expedita </p>
      <p>possimus totam aut officia quasi id sit magnam consequuntur ducimus porro culpa minus, officiis asperiores blanditiis.</p>
    </div>
           
    <img src={aboutImg} alt="Diego Ramón smiling" className={'about-me__img'} />
  </section>
);

export default About;