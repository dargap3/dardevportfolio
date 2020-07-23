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
          technologies={['React js', 'Firebase', 'Hooks']}
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
          technologies={['React js', 'Firebase', 'Redux']}
          codeUrl={'https://github.com/dargap3/royal-clothing'}
          url={'https://agitated-lamport-e41afc.netlify.app/'}
        />             
    </div>
  </section>
);

export default Projects;