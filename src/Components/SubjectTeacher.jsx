// src/components/SubjectTeacher.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubjectTeacher.css';

const SubjectTeacher = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedSubject && selectedTeacher) {
      navigate('/feedback', { state: { subject: selectedSubject, teacher: selectedTeacher } });
    }
  };

  return (
    <div className="subject-teacher-container">
      <h2>Select Subject and Teacher</h2>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <select id="subject" onChange={(e) => setSelectedSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="teacher">Teacher:</label>
        <select id="teacher" onChange={(e) => setSelectedTeacher(e.target.value)}>
          <option value="">Select Teacher</option>
          <option value="Mr. Smith">Mr. Smith</option>
          <option value="Ms. Johnson">Ms. Johnson</option>
          <option value="Dr. Lee">Dr. Lee</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Proceed to Feedback</button>
    </div>
  );
};

export default SubjectTeacher;
