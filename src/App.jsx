// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import './App.css';
import logo from './assets/tracom1.png';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';

function App() {
  const [showRegistration, setShowRegistration] = useState(true);
  const formRef = useRef(null);

  // Handle "Sign Up" button click
  const handleSignUpClick = () => {
    setShowRegistration(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="main-header">
        <nav className="main-nav">
          <img src={logo} className="main-logo" alt="Logo" />
          <ul id="main-nav-ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
            {/* Sign Up Button */}
            <li>
              <button className="signup-button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <h1>Tracom Academy</h1>
          <p>Empower Aspiring Technologists</p>
        </div>
      </header>

      <div className="con" ref={formRef}>
        <div className="form-toggle">
          <button onClick={() => setShowRegistration(true)} className={showRegistration ? 'active' : ''}>
            Register
          </button>
          <button onClick={() => setShowRegistration(false)} className={!showRegistration ? 'active' : ''}>
            Login
          </button>
        </div>

        {showRegistration ? <RegistrationForm /> : <LoginForm />}
      </div>

      {/* 
      <footer className="main-footer">
        <p>© 2024 Tracom Academy. All rights reserved.</p>
      </footer>
      */}
      <LoginForm/>
    </>
  );
}

export default App;
