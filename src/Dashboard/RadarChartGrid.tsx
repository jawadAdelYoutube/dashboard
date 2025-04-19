import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Tracking",
    A: 15,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Builder",
    A: 130,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Scheduler",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Ai train",
    A: 125,
    B: 40,
    fullMark: 150,
  },
  {
    subject: "Analytics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Reporting",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function RadarChartGrid() {
  return (
    <div className="col-span-4 overflow-hidden border border-stone-200 rounded">
      <div className="p-4 items-center font-medium gap-1.5 flex">
        <FiEye />
        <h1 className="text-lg font-semibold">Usage</h1>
      </div>
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mobile"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Desktop"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarChartGrid;
