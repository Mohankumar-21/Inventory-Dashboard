import React from "react";
import {
  FaHome,
  FaChartPie,
  FaCalendarAlt,
  FaEnvelope,
  FaTicketAlt,
  FaTree,
  FaTag,
  FaCog,
  FaSignOutAlt,
  FaShoppingCart,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg flex flex-col p-4">
      <div className="flex items-center mb-6">
        <div className="text-2xl font-bold text-indigo-600">Catalog</div>
      </div>
      <nav className="flex-1">
        <div className="text-sm font-semibold mb-2">HOME</div>
        <ul className="mb-4">
          <li className="flex items-center p-2 rounded-lg text-indigo-600 bg-indigo-100">
            <FaShoppingCart className="mr-3" /> eCommerce
          </li>
        </ul>
        <div className="text-sm font-semibold mb-2">App</div>
        <ul className="mb-4">
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaChartPie className="mr-3" /> Contacts
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaCalendarAlt className="mr-3" /> Calendar
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaEnvelope className="mr-3" /> Email
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaTicketAlt className="mr-3" /> Tickets
          </li>
        </ul>
        <div className="text-sm font-semibold mb-2">Page</div>
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaTree className="mr-3" /> Tree view
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaTag className="mr-3" /> Pricing
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex items-center p-4 mb-4 rounded-lg bg-gray-100">
          <img
            src="https://randomuser.me/api/portraits/men/44.jpg"
            alt="User"
            width={40}
            className="rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-semibold">Jane Cooper</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        <div className="p-2  md:flex">
          <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaCog className="mr-3" /> Setting
          </div>
          <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
            <FaSignOutAlt className="mr-3" /> Log out
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
