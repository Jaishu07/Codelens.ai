import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const featuredata = [
    {
      title: "🚀 AI-Powered Code Analysis",
      description: "Get instant feedback on your code with AI-driven insights and suggestions.",
    },
    {
      title: "🔍 Advanced Bug & Security Detection",
      description: "Find and fix hidden vulnerabilities before they impact your project.",
    },
    {
      title: "⚡ Performance Optimization",
      description: "Improve efficiency with AI-powered best practices for faster execution.",
    },
  ];

  return (
    <div className="home-container">
      {/* 🔔 Notification Bar */}
      <div className="notification-bar">🚀 AI Code Review is now powered by Gemini  AI!</div>

      {/* 🏠 Glassmorphic Main Section */}
      <div className="hero-section">
        <h1>🚀 AI Code Reviewer <br /> Your Smart Coding Assistant</h1>
        <p>nstant AI-Powered Code Reviews for Cleaner, Faster, and More Secure Code!</p>
        
        <button onClick={() => navigate("/codereview")} className="get-started">
          Get Started 🚀
        </button>
      </div>
     <div className="features-section">
       {featuredata.map((feature, index) => (
        <div className="feature-card" key={index}>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>  ))}
     </div>
      

     
    </div>
  );
}

export default Home;
