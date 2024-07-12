import React from 'react';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <h1>MATHEUS.</h1>
        </div>
        <ul>
          <li><Link className="animatedLink" to="skills" smooth={true} duration={500}>HABILIDADES</Link></li>
          <li><Link className="animatedLink" to="projects" smooth={true} duration={500}>PROJETOS</Link></li>
          <li><Link className="animatedLink" to="contact" smooth={true} duration={500}>CONTATO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
