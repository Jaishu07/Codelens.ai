import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import devImage from '../assets/profile-web.jpg';
import '../App.css';

function About() {
  return (
    <div className="about-container">
      {/* 🔔 Notification Bar */}
      <div className="notification-bar">✨ AI-Powered Code Review with Gemini 2.0 🚀</div>
      
      {/* 💡 Introduction Section */}
      <div className="glass-card intro-card">
        <h1>🚀 AI Code Reviewer</h1>
        <p>
          A next-generation AI-powered platform that analyzes, optimizes, and enhances your code. 
          Built with <strong>Google's Gemini 2.0 API</strong>, it provides real-time feedback, detects security flaws, 
          and suggests best coding practices.
        </p>
      </div>

      {/* 🔥 Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h2>🚀 AI-Powered Code Reviews</h2>
          <p>Instant feedback and optimization suggestions using cutting-edge AI.</p>
        </div>
        <div className="feature-card">
          <h2>🔍 Advanced Bug Detection</h2>
          <p>Find hidden vulnerabilities before they become a problem.</p>
        </div>
        <div className="feature-card">
          <h2>⚡ Performance & Security Insights</h2>
          <p>Ensure code efficiency and security compliance effortlessly.</p>
        </div>
      </div>

      {/* 📂 GitHub Repository */}
      <div className=" github-card">
        <h2>📂 GitHub Repository</h2>
        <a href="https://github.com/Jaishu07/Ai-code-review-FB" target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub size={24} /> View Source Code on GitHub
        </a>
      </div>

      {/* 👨‍💻 Developer Profile */}
      <div className="dev-card">
        <img src={devImage} alt="Developer" className="dev-image" />
        <div className="dev-content">
          <h2>👨‍💻 About the Developer</h2>
          <p>
            Hi, I'm <strong>Yashwant Sharma</strong>, a passionate software developer dedicated to building 
            tools that enhance productivity. This project was inspired by the need for smarter, AI-powered 
            code analysis.
          </p>
          {/* 🔗 Social Media Icons */}
          <div className="social-icons">
            <a href="https://github.com/Jaishu07" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/yashwantharma/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
