import { createSlice } from "@reduxjs/toolkit";

const socketDataSlice = createSlice({
  name: "socketData",
  initialState: {
    value: ["some", "sdf"],
    date: "",
    isPositive: true,
  },
  reducers: {
    setSocketData(state, action) {
      state.value = action.payload.value;
      state.date = action.payload.date;
      state.isPositive = action.payload.isPositive;
    },
  },
});

export const { setSocketData } = socketDataSlice.actions;
export default socketDataSlice.reducer;
