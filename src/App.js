//Importações
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

//Componentes de páginas
import Navbar from './components/Navbar';

//Páginas em componente
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

//CSS
import './App.css'; 

const Wave = () => (
  <svg className='svg' viewBox="0 0 1440 320">
    <path fill="#2d3a3aff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,128C672,128,768,160,864,160C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
);


const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
    });

    sr.reveal(`.about`, { delay: 200 });
    sr.reveal(`.projects`, { delay: 200 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <section id="about" className="about"><About /></section>
      <div className='transition'></div>
      <section id="skills" className="skills"><Skills /></section>
      <div className='transition-bottom'></div>
      <section id="projects" className="projects"><Projects /></section>
      <Wave />
      <section id="contact" className="contact"><Contact /></section>
    </div>
  );
}

export default App;
