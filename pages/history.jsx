import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import Table from "../components/Table";

export default function History() {
  const changes = useSelector((state) => state.changes);

  const MyTable = dynamic(() => import("../components/Table"), {
    ssr: false,
  });

  return (
    <div className=" ">
      <MyTable changes={changes} />
    </div>
  );
}
