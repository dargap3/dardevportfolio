import React from 'react';

import Header from './components/Header/header.component';
import Intro from './components/Intro/intro.component';
import About from './components/About/about.component';
import Projects from './components/Projects/projects.component';
import Footer from './components/Footer/footer.component';

import './App.css';

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
