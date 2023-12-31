import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", month: 2400 },
  { name: "Feb", month: 1398 },
  { name: "Mar", month: 9800 },
  { name: "Apr", month: 6908 },
  { name: "May", month: 4800 },
  { name: "Jun", month: 7800 },
  { name: "Jul", month: 4200 },
  { name: "Aug", month: 3900 },
  { name: "Sep", month: 8760 },
  { name: "Oct", month: 6800 },
  { name: "Nov", month: 8300 },
  { name: "Dec", month: 7200 }
];

const CustomBar = (props) => {
  const { fill, ...rest } = props;
  return (
    <g>
      <rect fill="#eee" {...rest} />
      <rect fill={fill} {...rest} />
    </g>
  );
};

const MyBarChart = () => {
  return (
    <ResponsiveContainer  width="100%" height={'100%'}>
      <BarChart data={data}  >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={'name'} tick={{ fontSize:10 }} />
        <YAxis dataKey={'month'} interval={1} tick={{ fontSize:12 }} />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="month" fill="#760509" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
