// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    rollNumber: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    // Simulate successful login and redirect to SubjectTeacherPage
    console.log('Logging in with:', loginData);
    navigate('/subject-teacher');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="rollNumber">Roll Number:</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={loginData.rollNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button  onClick={handleLogin} type="submit">Login</button>
      </form>
      <button onClick={handleSignupRedirect}>New User? Sign Up</button>
    </div>
  );
};

export default LoginPage;
