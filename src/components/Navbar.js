import React from 'react';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

const navItems = [
  { label: 'SOBRE', target: 'about' },
  { label: 'EXPERIÊNCIA', target: 'experience' },
  { label: 'PROJETOS', target: 'projects' },
  { label: 'STACK', target: 'stack' },
  { label: 'CONTATO', target: 'contact' },
];

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="about" smooth={true} duration={500}>
            <h1>MATHEUS.</h1>
          </Link>
        </div>
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link className="animatedLink" to={item.target} smooth={true} duration={500}>
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
