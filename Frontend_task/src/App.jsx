import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TransactionsPage from './components/TransactionsPage';
import Statistics from './components/Statistics';
import BarChartPage from './components/BarChartPage';
import PieChartPage from './components/PieChartPage';
import MonthSelector from './components/MonthSelector';

function App() {
  const [month, setMonth] = useState('03');

  const handlePreviousMonth = () => {
    setMonth(prevMonth => {
      const newMonth = parseInt(prevMonth, 10) - 1;
      if (newMonth === 0) return '12';
      return newMonth.toString().padStart(2, '0');
    });
  };

  const handleNextMonth = () => {
    setMonth(prevMonth => {
      const newMonth = parseInt(prevMonth, 10) + 1;
      if (newMonth === 13) return '01';
      return newMonth.toString().padStart(2, '0');
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-6">Roxiller Transactions Dashboard</h1>
        <div className="flex items-center justify-between mb-6">
          <button onClick={handlePreviousMonth} className="btn text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2">
            Previous Month
          </button>
          <MonthSelector month={month} setMonth={setMonth} />
          <button onClick={handleNextMonth} className="btn text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2">
            Next Month
          </button>
        </div>
        <TransactionsPage month={month} />
        <Statistics month={month} />
        <BarChartPage month={month} />
        <PieChartPage month={month} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
