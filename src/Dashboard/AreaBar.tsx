import { FiUser } from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Month A",
    desktop: 4000,
    mobile: 2400,
    amt: 2400,
  },
  {
    name: "Month B",
    desktop: 3000,
    mobile: 1398,
    amt: 2210,
  },
  {
    name: "Month C",
    desktop: 2000,
    mobile: 9800,
    amt: 2290,
  },
  {
    name: "Month D",
    desktop: 2780,
    mobile: 3908,
    amt: 2000,
  },
  {
    name: "Month E",
    desktop: 1890,
    mobile: 4800,
    amt: 2181,
  },
  {
    name: "Month F",
    desktop: 2390,
    mobile: 3800,
    amt: 2500,
  },
  {
    name: "Month G",
    desktop: 3490,
    mobile: 4300,
    amt: 2100,
  },
];

export default function AreaBar() {
  return (
    <div className="col-span-8 overflow-hidden border border-stone-200 rounded">
      <div className="p-4 font-medium flex items-center gap-1.5">
        <FiUser />
        <span className="text-lg font-semibold">Activity</span>
      </div>
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              className="text-sm text-stone-500 p-2"
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="desktop"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
