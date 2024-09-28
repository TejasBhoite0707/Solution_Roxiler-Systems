/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    fetchData();
  }, [month]);

  const fetchData = async () => {
    try {
      const statsRes = await axios.get(`http://localhost:3000/api/statistics?month=${month}`);
      setStatistics(statsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div id="statistics">
      <h2 className="text-2xl font-bold mb-6">Sales Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold mb-4">Statistics</h3>
        <p className="mb-2">Total Sale Amount: ${statistics.totalSaleAmount}</p>
        <p className="mb-2">Total Sold Items: {statistics.totalSoldItems}</p>
        <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
      </div>
    </div>
  );
};

export default Statistics;