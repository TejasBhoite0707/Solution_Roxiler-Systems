/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import BarChartComponent from './Barchart';

const BarChartPage = ({ month }) => {
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [month]);

  const fetchData = async () => {
    try {
      const barRes = await axios.get(`http://localhost:3000/api/bar-chart?month=${month}`);
      setBarChartData(barRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div id="barchart" className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Bar Chart</h2>
      <div className="mt-6">
        <BarChartComponent data={barChartData} />
      </div>
    </div>
  );
};

export default BarChartPage;
