import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChanges } from "../actions/changes";

export default function Tab() {
  const [timeStampValue, setTimeStampValue] = useState("1min");
  const [tab, setTab] = useState("overview");
  const dispatch = useDispatch();
  const [timeStamp, setTimeStamp] = useState(
    "histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30"
  );
  useEffect(() => {
    dispatch(getChanges(timeStamp));
  }, [dispatch, timeStamp]);

  function changeTimeStamp(value) {
    switch (value) {
      case "1min":
        setTimeStamp(
          "histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30"
        );
        setTimeStampValue("1min");
        break;
      case "5min":
        setTimeStamp(
          "histominute?aggregate=5&e=CCCAGG&fsym=BTC&tsym=usd&limit=30"
        );
        setTimeStampValue("5min");
        break;
      case "1hour":
        setTimeStamp(
          "histohour?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30"
        );
        setTimeStampValue("1hour");
        break;
      case "1week":
        setTimeStamp(
          "histoday?aggregate=7&e=CCCAGG&fsym=BTC&tsym=usd&limit=30"
        );
        setTimeStampValue("1week");
        break;
      default:
        setTimeStamp(
          "histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30"
        );
        setTimeStampValue("1min");
    }
  }

  return (
    <div className=" mt-5">
      <div className="flex ">
        <Link
          onClick={() => setTab("overview")}
          className={tab === "overview" ? "active-tab" : "tab"}
          href="/overview"
        >
          Overview
        </Link>
        <Link
          onClick={() => setTab("history")}
          className={tab === "history" ? "active-tab ml-10" : "tab ml-10"}
          href="/history"
        >
          History
        </Link>
      </div>

      <div className=" border-t-2 pt-9  pb-9">
        <button
          className={
            timeStampValue === "1min" ? " active-timeStamp " : "timeStamp "
          }
          onClick={() => {
            changeTimeStamp("1min");
          }}
        >
          1 Minute
        </button>
        <button
          className={
            timeStampValue === "5min" ? " active-timeStamp" : "timeStamp"
          }
          onClick={() => {
            changeTimeStamp("5min");
          }}
        >
          5 Minutes
        </button>
        <button
          className={
            timeStampValue === "1hour" ? " active-timeStamp" : "timeStamp"
          }
          onClick={() => {
            changeTimeStamp("1hour");
          }}
        >
          1 Hour
        </button>
        <button
          className={
            timeStampValue === "1week" ? " active-timeStamp" : "timeStamp"
          }
          onClick={() => {
            changeTimeStamp("1week");
          }}
        >
          1 Week
        </button>
      </div>
    </div>
  );
}
