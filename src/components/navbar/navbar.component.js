import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/table" className="nav-link">Shipping Info</Link>
          </li>
          <li className="navbar-item">
          <Link to="/materialtable" className="nav-link">Material Ui Table Info</Link>
          </li>
          <li className="navbar-item">
          <Link to="/searchjs" className="nav-link">Seach JS</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}