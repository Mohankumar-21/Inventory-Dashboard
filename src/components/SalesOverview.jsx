import React from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
import "tailwindcss/tailwind.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

const SalesOverview = () => {
  const doughnutData = {
    labels: ["Profit", "Expense"],
    datasets: [
      {
        data: [23450, 23450],
        backgroundColor: ["#4F46E5", "#22D3EE"],
        borderWidth: 1,
        cutout: "70%",
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: { display: false },
    },
    cutoutPercentage: 80,
    responsive: true,
    maintainAspectRatio: false,
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue Updates",
        data: [10, 30, 50, 80, 40, 20],
        backgroundColor: [
          "#A3A8F0",
          "#A3A8F0",
          "#A3A8F0",
          "#4F46E5",
          "#A3A8F0",
          "#A3A8F0",
        ],
        borderRadius: 8,
        barThickness: 12, // Minimized bar width
        borderSkipped: false,
      },
    ],
  };

  const yearlySalesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "2023",
        data: [3000, 4000, 5000, 7000, 6000, 5000],
        fill: true,
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(0, 0, 0, 0)"); // Enhanced gradient intensity
          gradient.addColorStop(1, "rgba(9, 50, 229, 0.2)");
          return gradient;
        },
        borderColor: "#4F46E5",
        pointBackgroundColor: "#4F41E5",
        pointBorderColor: "#FFFFFF",
        pointHoverRadius: 8, // Highlight peaks
        pointRadius: 6,
        tension: 0.4, // Smooth curve
      },
      {
        label: "2022",
        data: [2000, 3000, 4000, 5000, 4500, 4000],
        borderColor: "#60A5FA",
        backgroundColor: "transparent",
        pointBackgroundColor: "#60A5FA",
        pointBorderColor: "#FFFFFF",
        pointHoverRadius: 8, // Highlight peaks
        pointRadius: 6,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
        <div className="flex items-center">
          {/* Doughnut Chart */}
          <div className="relative flex justify-center items-center w-1/2">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            <div className="absolute text-xl font-bold">$500,00</div>
          </div>
          {/* Legend */}
          <div className="ml-6">
            <div className="flex items-center mb-2">
              <span className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></span>
              <span className="text-sm">$23,450 Profit</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-teal-400 rounded-full mr-2"></span>
              <span className="text-sm">$23,450 Expense</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Revenue Updates</h2>
        <Bar
          data={revenueData}
          options={{
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, max: 100 } },
          }}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Yearly Sales</h2>
        <Line
          data={yearlySalesData}
          options={{
            plugins: {
              legend: { display: true },
              tooltip: { mode: "index", intersect: false },
            },
            scales: { y: { beginAtZero: true } },
          }}
        />
      </div>
    </div>
  );
};

export default SalesOverview;
