import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

export default function Home() {
  const timeStamps = useSelector((state) => state.timeStampSlice);

  const MyChart = dynamic(() => import("../components/Chart"), {
    ssr: false,
  });

  return (
    <div>
      <MyChart changes={timeStamps} />
    </div>
  );
}
