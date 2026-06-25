import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import Navbar from './components/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import './App.css';

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    sr.reveal('.about', { delay: 200 });
    sr.reveal('.experience', { delay: 200 });
    sr.reveal('.projects', { delay: 200 });
    sr.reveal('.stack', { delay: 200 });
  }, []);

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
