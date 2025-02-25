import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Codelens AI</h2>
      <Link to="/" className="sidebar-button modern">🏠 Home</Link>
      <Link to="/about" className="sidebar-button classic">ℹ️ About</Link>
      <Link to="/codereview" className="sidebar-button modern">💻 Code Review</Link>
      
      <div className="user">
                  <SignedOut>
                    <SignInButton />
                      </SignedOut>
                      <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <h4>Profile</h4>
              </div>
    </div>
  );
}



export default Sidebar;

