"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { useTheme } from "@mui/material";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

interface PopulationData {
  year: number;
  value: number;
}

const PopulationChart: React.FC<{ populationCounts: PopulationData[] }> = ({
  populationCounts,
}) => {
  const theme = useTheme();
  const labels = populationCounts.map((item) => item.year.toString());
  const dataValues = populationCounts.map((item) => item.value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Population Over Years",
        data: dataValues,
        backgroundColor: theme.palette.primary.main,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
        beginAtZero: true,
        ticks: {
          stepSize: 5000000,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `Population: ${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PopulationChart;
