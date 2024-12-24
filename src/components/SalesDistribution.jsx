import React from 'react';
import 'tailwindcss/tailwind.css';

const SalesDistribution = () => {
  const salesData = [
    { amount: '$34,343.00', label: 'Total Sales' },
    { amount: '$4.5k', percentage: '40%', label: 'By Website' },
    { amount: '$2.8k', percentage: '25%', label: 'By Mobile' },
    { amount: '$2.2k', percentage: '20%', label: 'By Market' },
    { amount: '$1.7k', percentage: '15%', label: 'By Agent' }
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
      <h2 className="text-lg font-semibold mb-2">Sales Distribution</h2>
      <p className="text-sm mb-4">This is all over Platform Sales Generated</p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {salesData.map((item, index) => (
          <div key={index} className="bg-white text-gray-800 p-4 rounded-lg text-center shadow-md">
            <p className="text-xl font-bold">{item.amount}</p>
            {item.percentage && <p className="text-sm text-gray-500">{item.percentage}</p>}
            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesDistribution;
