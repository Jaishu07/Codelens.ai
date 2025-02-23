import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <Link to="/" className="sidebar-button modern">🏠 Home</Link>
      <Link to="/about" className="sidebar-button classic">ℹ️ About</Link>
      <Link to="/codereview" className="sidebar-button modern">💻 Code Review</Link>
    </div>
  );
}

export default Sidebar;