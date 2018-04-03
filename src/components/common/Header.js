import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Redirect } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>React and Redux</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item" ><NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink></li>
        <li className="nav-item" ><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
      </ul>
    </div>
  );
};

Header.propTypes = {
};

export default Header;