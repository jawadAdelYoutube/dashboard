import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

function StatCard() {
  return (
    <>
      <Card
        title="Growth revenue"
        value="$107,567"
        trend="up"
        pillText="50% inc"
        period="last 30 days"
      />
      <Card
        title="April Orders"
        value="$56"
        trend="down"
        pillText="20% dec"
        period="last 30 days"
      />
      <Card
        title="current year"
        value="$50,000"
        trend="up"
        pillText="80% inc"
        period="last 365 days"
      />
    </>
  );
}

const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
}: {
  title?: string;
  value?: string;
  pillText?: string;
  trend?: "up" | "down";
  period?: string;
}) => {
  return (
    <div className="p-4 border-stone-200 border rounded col-span-4">
      <div className="flex items-start mb-8 justify-between">
        <div>
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <span
          className={`text-xs flex items-center gap-1 px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          {pillText}
        </span>
      </div>
      <div className="text-sm text-stone-300">{period}</div>
    </div>
  );
};
export default StatCard;
