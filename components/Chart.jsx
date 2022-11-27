import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from "recharts";
import { useSelector } from "react-redux";

export default function Chart({ changes }) {
  const socketData = useSelector((state) => state.socketDataSlice.value);

  return (
    <ResponsiveContainer className={" "} width="80%" aspect={3}>
      <AreaChart data={changes.data} margin={{ right: 30 }}>
        <XAxis dataKey="Date" />
        <YAxis domain={["auto", "auto"]} orientation="right" />
        <CartesianGrid strokeDasharray="1 1" />
        <Tooltip />
        <ReferenceLine y={socketData?.last} strokeDasharray="7 10" stroke="red">
          <Label className=" line" position="right" fill="red">
            {socketData?.last}
          </Label>
        </ReferenceLine>
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
