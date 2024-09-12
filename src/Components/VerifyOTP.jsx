// src/Components/VerifyOTP.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './VerifyOTP.css';

const VerifyOTP = () => {
  const location = useLocation();
  const { rollno, email } = location.state || {};
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const validateOTP = () => {
    const newErrors = {};
    if (!otp) newErrors.otp = 'OTP is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerifyOTP = () => {
    if (validateOTP()) {
      // Handle OTP verification logic here
      console.log('OTP:', otp);
      // For now, we are assuming OTP is correct
      navigate('/feedback');
    }
  };

  return (
    <div className="verify-otp-container">
      <h2>Verify OTP</h2>
      <form>
        <div className="form-group">
          <label>Enter OTP:</label>
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={handleChange}
          />
          {errors.otp && <span className="error-message">{errors.otp}</span>}
        </div>
        <button type="button" onClick={handleVerifyOTP}>Verify OTP</button>
      </form>
    </div>
  );
};

export default VerifyOTP;
