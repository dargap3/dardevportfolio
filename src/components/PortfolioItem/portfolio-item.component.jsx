import React from 'react';
import Tilt from 'react-tilt';

import './portfolio-item.styles.css';

const PortfolioItem = ({type, title, description, technologies, codeUrl, url}) => {
  const techList = technologies.map( tech =>
    <li 
      key={tech}
      className={'techlist__item'}
    >
      {tech}
    </li>
    );
  return (
    <Tilt className="Tilt" options={{ max : 25 }} >
      <div className="Tilt-inner">        
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 center portfolio__item">
          <p>{type}</p>
          <h3 style={{textTransform: "uppercase"}}>{title}</h3>
            <p>{description}</p>
            <ul className={'techlist'}>
              {techList}                         
            </ul>
            <div className={'portfolio__links'}>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href={url} 
              >
                Demo
              </a>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href={codeUrl}
              >
                Code
              </a>
            </div>
        </article>
      </div>
    </Tilt>               
  );
}

export default PortfolioItem;