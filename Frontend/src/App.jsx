import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Codereview from './components/Codereview';
import './App.css';

function App() {
  const location = useLocation(); // Get current route
  const isHomePage = location.pathname === '/'; // Check if on home page

  return (
    <div className="app-container">
      {!isHomePage && <Sidebar /> } {/* Hide sidebar on home page */}
      <div className="content">
        {/* Show navbar on all pages except home */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/codereview" element={<Codereview />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}