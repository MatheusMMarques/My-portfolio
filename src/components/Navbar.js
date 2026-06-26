import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

const navItems = [
  { label: 'SOBRE', target: 'about' },
  { label: 'EXPERIÊNCIA', target: 'experience' },
  { label: 'PROJETOS', target: 'projects' },
  { label: 'STACK', target: 'stack' },
  { label: 'CONTATO', target: 'contact' },
];

const scrollOptions = {
  smooth: true,
  duration: 500,
  offset: -72,
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar" aria-label="Navegação principal">
        <div className="navbar-left">
          <Link to="about" {...scrollOptions} onClick={closeMenu}>
            <h1>MATHEUS.</h1>
          </Link>
        </div>

        <button
          className={`navbar-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="navbar-menu" className={`navbar-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link className="animatedLink" to={item.target} {...scrollOptions} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
