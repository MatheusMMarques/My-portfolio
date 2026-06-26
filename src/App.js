import React from 'react';

import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="about" className="page-section about"><About /></section>
      <Experience />
      <section id="projects" className="page-section projects"><Projects /></section>
      <section id="stack" className="page-section stack"><Skills /></section>
      <section id="contact" className="page-section contact"><Contact /></section>
    </div>
  );
}

export default App;
