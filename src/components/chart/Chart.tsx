import { CategoryScale } from "chart.js";
import { Chart as ChartJs } from "chart.js/auto";
import { Line } from "react-chartjs-2";

ChartJs.register(CategoryScale);

export default function Chart() {
  const chartData = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "purple",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" ml-10 w-full h-full">
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export const Data = [
  {
    id: 1,
    year: "Jan 1",
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: "Jan 7",
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: "Jan 14",
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: "Jan 21",
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: "Jan 31",
    userGain: 4300,
    userLost: 234,
  },
];
