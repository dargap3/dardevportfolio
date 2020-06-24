import React from 'react';

import './projects.styles.css';

import PortfolioItem from '../PortfolioItem/portfolio-item.component';

const Projects = () => (
  <section className="my-work" id="work">
    <h2 className="section__title">My work</h2>
    <p className="section__subtitle">Some things I've built.</p>
      
    <div className="portfolio">
      <PortfolioItem
          type={'web app'}
          title={'titulo'}
          description={'lore ipsum larguito'}
          technologies={['React js', 'Node js']}
          codeUrl={'www.google.com'}
          url={'www.facebook.com'}
        />
        <PortfolioItem
          type={'web app'}
          title={'titulo'}
          description={'lore ipsum larguito'}
          technologies={['React js', 'Node js']}
          codeUrl={'www.google.com'}
          url={'www.facebook.com'}
        />
        <PortfolioItem
          type={'web app'}
          title={'titulo'}
          description={'lore ipsum larguito'}
          technologies={['React js', 'Node js']}
          codeUrl={'www.google.com'}
          url={'www.facebook.com'}
        />
                
    </div>
  </section>
);

export default Projects;