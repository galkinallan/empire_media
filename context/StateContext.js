import React, { createContext, useContext, useState, useEffect } from "react";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";
import { setSocketData } from "../redux/slices/socketData";

const Context = createContext();

export function useStateContext() {
  return useContext(Context);
}

export function StateContext({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    let result = {
      value: "",
      date: "",
      isPositive: true,
    };
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
      result.value = data;
      result.date = date;
      if (data.change < 0) {
        result.isPositive = false;
      }
      dispatch(setSocketData(result));
    };

    return () => socket.close();
  }, []);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
