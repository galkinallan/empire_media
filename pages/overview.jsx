import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

export default function Overview() {
  const changes = useSelector((state) => state.changes);

  const MyChart = dynamic(() => import("../components/Chart"), {
    ssr: false,
  });
  return (
    <div>
      <MyChart changes={changes} />
    </div>
  );
}
