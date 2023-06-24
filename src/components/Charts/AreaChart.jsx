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
  { name: "Apr", value: 65 },
  { name: "May", value: 70 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 60 },
  { name: "Aug", value: 70 },
  { name: "Sep", value: 80 },
  { name: "Oct", value: 80 },
  { name: "Nov", value: 70 },
  { name: "Dec", value: 60 },
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
    <ResponsiveContainer
      width="104%"
      height={height || 300}
      className={"-ml-7"}
    >
      <AreaChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis interval={1} tick={{ fontSize: 10 }} />
        <Tooltip />
        {/* <defs>
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
        </defs> */}
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(118, 5, 9,.01)" />
            <stop offset="90%" stopColor="#fcf7fd" />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="rgba(118, 5, 9,.2)"
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyAreaChart;
