import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HealthChart from '../components/HealthChart';
import HealthForm from '../components/HealthForm';

const Dashboard = () => {
  const [stats, setStats] = useState([]);

  const fetchStats = () => {
    axios.get('http://localhost:5000/api/health')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="p-5 text-4xl bold text-center">Health Dashboard</h1>
      <p className="text-sm semi-bold text-italic text-center p-3">Know your health status</p>
      <HealthForm onAdd={fetchStats} />
      <div className="w-1/2 h-1/2 item-center justify-center ml-90">
        <HealthChart data={stats} />
      </div>
    </div>
  );
};

export default Dashboard;