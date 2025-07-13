import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

const HealthChart = ({ data }) => {
  const labels = data.map(entry => entry.date);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: data.map(entry => entry.calories),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Sleep (hrs)',
        data: data.map(entry => entry.sleep),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Workouts',
        data: data.map(entry => entry.workouts),
        borderColor: 'green',
        fill: false,
      }
    ]
  };

  return <Line data={chartData} />;
};

export default HealthChart;
