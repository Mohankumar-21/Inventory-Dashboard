import React from "react";
import Sidebar from "../components/Sidebar";
import SalesDistribution from "../components/SalesDistribution";
import SalesOverview from "../components/SalesOverview";
import ActiveUserAndPayment from "../components/ActiveUserAndPayment";
import "../index.css";
import { FaBell, FaEnvelope, FaCog } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
    {/* Sidebar */}
    <Sidebar />
  
    {/* Main Content */}
    <div className="p-6 bg-gray-100 flex-grow overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1 md:gap-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input
            type="search"
            placeholder="Search"
            className="p-2 border rounded-lg bg-gray-200"
          />
        </div>
  
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaBell className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaCog className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>
  
      {/* Sales Distribution */}
      <div className="mb-6">
        <SalesDistribution />
      </div>
  
      {/* Sales Overview */}
      <div className="mb-6">
        <SalesOverview />
      </div>
  
      {/* Active Users and Payment Gateways */}
      <div>
        <ActiveUserAndPayment />
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
