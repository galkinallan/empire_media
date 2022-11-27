import { configureStore } from "@reduxjs/toolkit";
import timeStampSlice from "./slices/timeStamp";
import socketDataSlice from "./slices/socketData";

export const store = configureStore({
  reducer: { timeStampSlice, socketDataSlice },
});
