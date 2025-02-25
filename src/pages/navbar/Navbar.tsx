import { useState } from 'react';
import Project from '../body/Projetos/Projects';
import Home from '../body/Home/Home';
import Sobre from '../body/Sobre/Sobre';
import logo from '/cgouvea.png';
import './Navbar.css';

const Navbar = () => {
  const [content, setContent] = useState('Home');

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#"
            onClick={() => setContent('Home')}>
            <img src={logo} alt="Bootstrap" />
          </a>
          <div className="navbar-menu">
            <a onClick={() => setContent('Projetos')}>Projetos</a>
            <a onClick={() => setContent('Sobre')}>Sobre</a>
          </div>
        </div>
      </nav>
      <div className="content">
        {content === 'Home' && <div><Home /></div>}
        {content === 'Projetos' && <div><Project /></div>}
        {content === 'Sobre' && <div><Sobre /></div>}
      </div>
    </div>
  );
};

export default Navbar;
