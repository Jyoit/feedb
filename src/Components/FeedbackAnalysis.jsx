// src/components/FeedbackAnalysis.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const FeedbackAnalysis = ({ feedbackData }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const categories = [
      'Knowledge', 'Communication', 'Commitment', 'Interest', 'Integration',
      'Accessibility', 'Initiative', 'Regularity', 'Completion', 'Fairness', 'Overall'
    ];

    const ratings = categories.map(category => feedbackData[category.toLowerCase()] || 0);

    setChartData({
      labels: categories,
      datasets: [
        {
          label: 'Average Ratings',
          data: ratings,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    });
  }, [feedbackData]);

  return (
    <div>
      <h2>Feedback Analysis</h2>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default FeedbackAnalysis;
