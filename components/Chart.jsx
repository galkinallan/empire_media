import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ ...props }) {
  return (
    <ResponsiveContainer width="95%" height={600}>
      <AreaChart data={props.changes.data}>
        <XAxis dataKey="Date" />
        <YAxis domain={["auto", "auto"]} orientation="right" />
        <CartesianGrid strokeDasharray="1 1" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Close"
          stroke="blue"
          fillOpacity={1}
          fill="#0078d11a"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
