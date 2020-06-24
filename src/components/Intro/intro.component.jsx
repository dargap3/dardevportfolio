import React from 'react';

import './intro.styles.css';

const Intro = () => (
  <section className="intro" id="home">
    <h1 className="section__title section__title--intro">
      Hi, I am <strong>Diego Ramón</strong>
    </h1>
    <p className="section__subtitle section__subtitle--intro">front-end dev</p>
    <p className='intro__img'/> 
  </section>
);

export default Intro;