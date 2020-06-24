import React from 'react';
import Tilt from 'react-tilt';

import './portfolio-item.styles.css';

const PortfolioItem = ({type, title, description, technologies, codeUrl, url}) => {
  const techList = technologies.map( tech =>
    <li ket={tech}>
      {tech}
    </li>
    );
  return (
    <Tilt className="Tilt" options={{ max : 25 }} >
      <div className="Tilt-inner">
        <a href={url} >
          <article className="br2 ba dark-gray b--black-10 mv4 w-100 center portfolio__item">
            <p>{type}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
              <ul>
                {techList}                         
              </ul>
              <a href={codeUrl}>Source Code</a>
            </div>
          </article>
        </a>
      </div>
    </Tilt>               
  );
}

export default PortfolioItem;