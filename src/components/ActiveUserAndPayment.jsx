import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Filler } from 'chart.js';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { FaPaypal, FaWallet, FaCreditCard } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Filler);

const SalesOverview = () => {
  const paymentGateways = [
    { name: 'Paypal', type: 'Big Brands', amount: '+$6235', icon: <FaPaypal className="text-red-500" /> },
    { name: 'Wallet', type: 'Bill payment', amount: '-$235', icon: <FaWallet className="text-yellow-500" /> },
    { name: 'Credit card', type: 'Bill Payment', amount: '+$2235', icon: <FaCreditCard className="text-blue-500" /> }
  ];

  const markers = [
    { markerOffset: 15, name: 'USA', coordinates: [-100.0, 40.0] },
    { markerOffset: 15, name: 'Brazil', coordinates: [-51.9253, -14.2350] },
    { markerOffset: 15, name: 'India', coordinates: [78.9629, 20.5937] },
    { markerOffset: 15, name: 'Australia', coordinates: [133.7751, -25.2744] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Active User Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Active User</h2>
        <p className="text-sm text-blue-500 mb-2">8.06% Vs. previous month</p>
        <div className="h-64">
          <ComposableMap projection="geoMercator">
            <Geographies geography="https://unpkg.com/world-atlas@2.0.2/countries-110m.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />
                ))
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={5} fill="#4F46E5" stroke="#FFFFFF" strokeWidth={2} />
              </Marker>
            ))}
          </ComposableMap>
        </div>
        <p className="text-3xl font-bold mt-4">23,214</p>
        <p className="text-sm text-gray-500">Total Active User</p>
      </div>

      {/* Payment Gateways Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Payment Gateways</h2>
        <ul>
          {paymentGateways.map((gateway, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center">
                {gateway.icon}
                <div className="ml-3">
                  <p className="font-medium">{gateway.name}</p>
                  <p className="text-sm text-gray-500">{gateway.type}</p>
                </div>
              </div>
              <p className="font-medium">{gateway.amount}</p>
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-full">View all transactions</button>
      </div>
    </div>
  );
};

export default SalesOverview;