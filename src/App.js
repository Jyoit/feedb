// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import SubjectTeacher from './Components/SubjectTeacher';
import VerifyOTP from './Components/VerifyOTP';
import FeedbackForm from './Components/FeedbackForm';

import ThankYou from './Components/ThankYou';
import OtpPage from './Components/OtpPage';
import FeedbackAnalysis from './Components/FeedbackAnalysis';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp-verification" element={<OtpPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/subject-teacher" element={<SubjectTeacher/>} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/thank-you" element={<ThankYou/>} />
        {/* <Route path="/" element={<SignupPage />} /> Default route */}
        <Route path="/feedback-analysis" element={<FeedbackAnalysis/>} />
      </Routes>
    </Router>
  );
};

export default App;
