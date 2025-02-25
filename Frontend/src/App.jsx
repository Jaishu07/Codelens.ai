import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Codereview from './components/Codereview';
import './App.css';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import ProtectedRoute from './components/ProtectedRoute';


 


function App() {
  const location = useLocation(); // Get current route
  const isHomePage = location.pathname === '/'; // Check if on home page
  
  return (
    <div className="app-container">
       
      {!isHomePage && <Sidebar /> } {/* Hide sidebar on home page */}
      <div className="content">
        {/* Show navbar on all pages except home */}
        {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/codereview" element={<Codereview />} /> */}
         
          <Route 
           path="/codereview" 
           element={
            <ProtectedRoute>
            <Codereview />
            </ProtectedRoute>
             } 
/>
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




