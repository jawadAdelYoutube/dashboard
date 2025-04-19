import React from "react";
import StatCard from "./StatCard";
import { AreaChart, BarChart } from "recharts";
import AreaBar from "./AreaBar";
import RadarChartGrid from "./RadarChartGrid";

function Grid() {
  return (
    <div className="grid grid-cols-12 gap-3 px-4">
      <StatCard />
      <AreaBar />
      <RadarChartGrid />
    </div>
  );
}

export default Grid;
