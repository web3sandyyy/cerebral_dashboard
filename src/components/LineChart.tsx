import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { formatNumber } from "../helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface DataPoint {
  date: string;
  web_sales: number;
  offline_sales: number;
}

const LineChart = ({ data }: { data: DataPoint[] }) => {
  const labels = data.map((item) => item.date);
  const webSales = data.map((item) => item.web_sales);
  const offlineSales = data.map((item) => item.offline_sales);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Web Sales",
        data: webSales,
        borderColor: "#007bff",
        backgroundColor: "transparent",
        tension: 0.4, 
        borderWidth: 2, 
        pointRadius: 0, 
      },
      {
        label: "Offline Sales",
        data: offlineSales,
        borderColor: "#00c0ef", 
        backgroundColor: "transparent",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, 
        intersect: false,
        mode: "index" as const,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },

        ticks: {
          display: false, 
        },
      },
      y: {
        min: 0,
        max: 8000,
        grid: {
            color: "#f0f0f0",
            borderDash: [5, 5],
        },
        ticks: {
            stepSize: 4000,
          callback: function(value: number | string) {
            return `${formatNumber({ num: Number(value) , onlyK:true })}`
          },
          font: {
            size: 12,
          },
          color: "#999", 
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
