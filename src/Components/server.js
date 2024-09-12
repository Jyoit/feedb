// src/Components/SignUpPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUpPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    department: '',
    rollno: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle signup logic here
      console.log('User Data:', formData);

      // Redirect to login page
      navigate('/login');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Branch:</label>
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
          {errors.branch && <span className="error-message">{errors.branch}</span>}
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} />
          {errors.department && <span className="error-message">{errors.department}</span>}
        </div>
        <div className="form-group">
          <label>Roll No:</label>
          <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} />
          {errors.rollno && <span className="error-message">{errors.rollno}</span>}
        </div>
        <button type="button" onClick={handleSubmit}>Sign Up</button>
        <button type="button" onClick={() => navigate('/login')}>Go to Login</button>
      </form>
    </div>
  );
};

export default SignupPage;
