import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

export default function History() {
  const timeStamps = useSelector((state) => state.timeStampSlice);

  const MyTable = dynamic(() => import("../components/Table"), {
    ssr: false,
  });

  return <MyTable changes={timeStamps} />;
}
