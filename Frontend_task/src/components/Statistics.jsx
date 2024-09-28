import React, { useState } from 'react'

const Statistics = () => {
  const [selectedMonth, setSelectedMonth] = useState  ('June'); 


  const statistics = {
    totalSale: 100000,
    totalSoldItem: 55,
    totalNotSoldItem: 15,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h1 className="text-xl font-bold">
          Statistics - {selectedMonth}
          <span className="text-sm text-gray-500 ml-2">(Selected month name from dropdown)</span>
        </h1>
        <div className="bg-yellow-200 p-4 rounded-lg mt-4">
          <div className="flex justify-between py-1">
            <span>Total sale</span>
            <span>{statistics.totalSale}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Total sold item</span>
            <span>{statistics.totalSoldItem}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Total not sold item</span>
            <span>{statistics.totalNotSoldItem}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
