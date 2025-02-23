import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">AI Code</Link>
      <div className="nav-links">
        <Link to="/" className="nav-button classic">Home</Link>
        <Link to="/about" className="nav-button modern">About</Link>
        <Link to="/codereview" className="nav-button classic">Code Review</Link>
      </div>
    </nav>
  );
}

export default Navbar;