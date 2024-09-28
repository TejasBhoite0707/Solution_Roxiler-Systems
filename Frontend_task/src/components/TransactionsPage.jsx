/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsPage = ({ month }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [month]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const transactionsRes = await axios.get(`http://localhost:3000/api/combined-data?month=${month}`);
      console.log('API Response:', transactionsRes.data);
      setTransactions(transactionsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setTransactions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <div className="text-center py-4">Loading...</div>;
    }

    if (transactions.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No transactions found for this month.</p>
          <p className="mt-2 text-gray-500">Try selecting a different month or check if there&apos;s data available.</p>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Sold</th>
              <th className="px-4 py-2">Date of Sale</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="px-4 py-2">{transaction.id}</td>
                <td className="px-4 py-2">
                  <img src={transaction.image} alt={transaction.title} className="w-16 h-16 object-cover" />
                </td>
                <td className="px-4 py-2">{transaction.title}</td>
                <td className="px-4 py-2">{transaction.description}</td>
                <td className="px-4 py-2">${transaction.price}</td>
                <td className="px-4 py-2">{transaction.category}</td>
                <td className="px-4 py-2">{transaction.sold ? 'Yes' : 'No'}</td>
                <td className="px-4 py-2">{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div id="transactions">
      <h2 className="text-2xl font-bold mb-6">Transactions</h2>
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        {renderContent()}
      </div>
    </div>
  );
};

export default TransactionsPage;