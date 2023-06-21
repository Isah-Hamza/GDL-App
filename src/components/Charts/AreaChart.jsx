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
  { name: "Jan", value: 50 },
  { name: "Feb", value: 60 },
  { name: "Mar", value: 70 },
  { name: "Apr", value: 80 },
  { name: "May", value: 70 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 50 },
  { name: "Aug", value: 70 },
  { name: "Sep", value: 80 },
  { name: "Oct", value: 60 },
  { name: "Nov", value: 90 },
  { name: "Dec", value: 100 },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((d) => d.value));
  const dataMin = Math.min(...data.map((d) => d.value));
  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }
  return dataMax / (dataMax - dataMin);
};

const MyAreaChart = ({ height }) => {
  return (
    <ResponsiveContainer width="100%" height={height || 300} className={'-translate-x-5'}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis  interval={1} tick={{ fontSize: 10 }} />
        <Tooltip />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset={gradientOffset()}
              stopColor="#760509"
              stopOpacity={0.8}
            />
            <stop
              offset={gradientOffset()}
              stopColor="#760509"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke="#760509" fill="hsla(358, 92%, 24%,60%)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaChart;
