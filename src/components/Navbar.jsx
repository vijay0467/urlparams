import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this is included for Bootstrap functionality

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-info p-4">
      <div className="container-fluid">
        {/* Logo */}
        <img 
          src="./src/assets/logo.png" 
          alt="Logo" 
          className="img-fluid rounded-circle" 
          style={{ width: '60px', height: '60px' }} 
        />

        {/* Toggler Button for Small Screens */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">Products</NavLink>
            </li>
          </ul>
          <button className='btn btn-outline-success   border-dark rounded-pill px-3' style={{ color: 'black' }}>getstarted</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
