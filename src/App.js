import React from 'react';

import Header from './components/Header/header.component';
import Intro from './components/Intro/intro.component';
import About from './components/About/about.component';
import Projects from './components/Projects/projects.component';
import Footer from './components/Footer/footer.component';

import ReactGA from 'react-ga';

import './App.css';

ReactGA.initialize('UA-173398640-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
