// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Optional: Create a CSS file for styling

const HomePage = () => {
  const navigate = useNavigate();

  // Function to navigate to student signup/login page
  const handleStudentClick = () => {
    navigate('/signup');
  };

  // Function to navigate to admin login page (You can create a separate page for admin later)
  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Feedback Portal</h1>
      <div className="button-container">
        <button className="btn" onClick={handleStudentClick}>
          Student
        </button>
        <button className="btn" onClick={handleAdminClick}>
          Admin
        </button>
      </div>
    </div>
  );
};

export default HomePage;
