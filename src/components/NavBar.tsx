import ToggleTheme from './ToggleTheme';
import { NavLink } from 'react-router-dom';
import { routes } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import type { FunctionComponent } from 'react';

const Navbar: FunctionComponent = () => (
  <nav
    role="navigation"
    className="navbar"
    aria-label="Main navigation"
  >
    <div className="navbar-wrapper">
     
      <div className="navbar-routes">
        {routes.map(({ path, name }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) => 'navbar-item' + (isActive ? ' is-active' : '')}
          >
            <span>{name}</span>
          </NavLink>
        ))}
        <div className="seperator" />
        <a
          target="_blank"
          aria-label="GitHub"
          className="navbar-item"
          rel="noopener noreferrer"
          href="https://github.com/based-ghost"
        >
          <span>GitHub</span>
          <FontAwesomeIcon icon="external-link-alt" />
        </a>
        <div className="navbar-theme-toggle">
          <ToggleTheme />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
