import React from 'react';

import './projects.styles.css';

import PortfolioItem from '../PortfolioItem/portfolio-item.component';

const Projects = () => (
  <section className="my-work" id="work">
    <h2 className="section__title">My work</h2>
    <p className="section__subtitle">Some things that I've built. I have to say that, I'm always improving myself and of course, my code too.</p>      
    <div className="portfolio">
      <PortfolioItem
          type={'web app'}
          title={'NoName'}
          description={"noname's website, a company dedicated to helping small and medium businesses."}
          technologies={['React js', 'Firebase', 'Hooks', 'React Router']}
          codeUrl={'https://github.com/dargap3/NoName'}
          url={'https://noname.com.co/'}
        />
        <PortfolioItem
          type={'web app'}
          title={'pic some'}
          description={'A little mock e-commerce site, where you can order your favorite images to print.'}
          technologies={['React js', 'Hooks', 'Context']}
          codeUrl={'https://github.com/dargap3/pic-some-app'}
          url={'https://vigorous-jones-d27f07.netlify.app/'}
        />
        <PortfolioItem
          type={'web app'}
          title={'royal clothing'}
          description={'Virtual clothes store, where you can find different collections and items.'}
          technologies={['React js', 'Firebase', 'Redux', 'React Router']}
          codeUrl={'https://github.com/dargap3/royal-clothing'}
          url={'https://agitated-lamport-e41afc.netlify.app/'}
        />
        <PortfolioItem
          type={'web app'}
          title={'picture in picture'}
          description={'Pop a video out into a small floating window that stays above all others, so that you can keep watching while doing other things.'}
          technologies={['JavaScript', 'Screen Capture API']}
          codeUrl={'https://github.com/dargap3/picture-in-picture'}
          url={'https://dargap3.github.io/picture-in-picture/'}
        />
        <PortfolioItem
          type={'web app'}
          title={'infinite scroll'}
          description={"In this project you could find a bunch of images from unplash API where you can infinite scrolling through the website"}
          technologies={['JavaScript', 'Unplash API']}
          codeUrl={'https://github.com/dargap3/infinite-scroll'}
          url={'https://dargap3.github.io/infinite-scroll/'}
        />
        <PortfolioItem
          type={'web app'}
          title={'quote generator'}
          description={"A famous' quotes generator, you can twit any quote."}
          technologies={['JavaScript']}
          codeUrl={'https://github.com/dargap3/quote-generator'}
          url={'https://dargap3.github.io/quote-generator/'}
        />           
    </div>
  </section>
);

export default Projects;