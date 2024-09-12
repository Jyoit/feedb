// src/components/OtpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // TODO: Implement OTP verification logic.
    // For now, we'll just simulate successful verification.
    console.log('Verifying OTP:', otp);
    navigate('/login');
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
      <form onSubmit={handleVerifyOtp}>
        <div>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OtpPage;
