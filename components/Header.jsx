import { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment-timezone";
import btcImage from "../public/images/btc.png";

export default function Header() {
  const [socketData, setSocketData] = useState(null);
  const [date, setDate] = useState("");
  const [positiveChange, setPositiveChange] = useState(true);

  useEffect(() => {
    let socket = new WebSocket("wss://wstest.fxempire.com?token=btctothemoon");
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "SUBSCRIBE",
          instruments: ["cc-btc-usd-cccagg"],
        })
      );
    };
    socket.onmessage = (msg) => {
      const dataJson = JSON.parse(msg.data);
      const data = dataJson["cc-btc-usd-cccagg"];
      const date = moment(data.lastUpdate)
        .tz("UTC")
        .format("MMM Do, YYYY hh:mm z");
      setSocketData(data);
      setDate(date);
      if (data.change < 0) {
        setPositiveChange(false);
      }
    };

    return () => socket.close();
  }, []);

  return (
    <div className="header  flex justify-between some:bg-black p-5 shadow-lg2 ">
      <div className="left">
        <div className="logo flex">
          <Image src={btcImage} alt="btc" width={30} height={20} />
          <h2 className=" text-3xl ml-2 font-bold">Bitcoin</h2>
        </div>
        <span className=" text-gray-400">As of: {date}</span>
      </div>
      <div className="right">
        <div className="top flex  items-center">
          {socketData?.change > 0 ? (
            <span className=" text-green-500 text-center text-3xl">
              &#9650;
            </span>
          ) : (
            <span className=" text-red-500 text-center text-2xl">&#9660;</span>
          )}
          <h2 className="text-4xl font-bold ml-3">
            ${" "}
            {socketData?.last.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h2>
        </div>

        <div className="underLast flex justify-between">
          <h2
            className={` text-xl ${
              positiveChange ? "text-green-500 ml-1" : "text-red-500 "
            }`}
          >
            {socketData?.change.toFixed(2)}
          </h2>
          <h2
            className={` text-xl ${
              positiveChange ? "text-green-500 ml-1" : "text-red-500 ml-10"
            }`}
          >
            ({socketData?.percentChange.toFixed(2)}%)
          </h2>
        </div>
      </div>
    </div>
  );
}
