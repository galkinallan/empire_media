import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRecentChanges } from "../redux/slices/timeStamp";

const TabContainer = tw.div`tab-container mt-5`;

const Tabs = tw.div`flex`;

const TimeStamps = tw.div`border-t-2 pt-9 pb-9`;

export default function Tab() {
  const oneMin = {
    link: "histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30",
    value: "1min",
  };
  const fiveMin = {
    link: "histominute?aggregate=5&e=CCCAGG&fsym=BTC&tsym=usd&limit=30",
    value: "5min",
  };
  const oneHour = {
    link: "histohour?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd&limit=30",
    value: "1hour",
  };
  const oneWeek = {
    link: "histoday?aggregate=7&e=CCCAGG&fsym=BTC&tsym=usd&limit=30",
    value: "1week",
  };

  const router = useRouter();
  const timeStamp = useSelector((state) => state.timeStampSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentChanges(oneMin));
  }, []);

  return (
    <TabContainer>
      <Tabs>
        <Link legacyBehavior href="/">
          <a className={router.pathname == "/" ? "active-tab" : "tab"}>
            Overview
          </a>
        </Link>
        <Link legacyBehavior href="/history">
          <a className={router.pathname == "/history" ? "active-tab" : "tab"}>
            History
          </a>
        </Link>
      </Tabs>

      <TimeStamps>
        <button
          className={
            timeStamp.value === "1min" ? " active-timeStamp " : "timeStamp "
          }
          onClick={() => dispatch(getRecentChanges(oneMin))}
        >
          1 Minute
        </button>
        <button
          className={
            timeStamp.value === "5min" ? " active-timeStamp" : "timeStamp"
          }
          onClick={() => dispatch(getRecentChanges(fiveMin))}
        >
          5 Minutes
        </button>
        <button
          className={
            timeStamp.value === "1hour" ? " active-timeStamp" : "timeStamp"
          }
          onClick={() => dispatch(getRecentChanges(oneHour))}
        >
          1 Hour
        </button>
        <button
          className={
            timeStamp.value === "1week" ? " active-timeStamp" : "timeStamp"
          }
          onClick={() => dispatch(getRecentChanges(oneWeek))}
        >
          1 Week
        </button>
      </TimeStamps>
    </TabContainer>
  );
}
