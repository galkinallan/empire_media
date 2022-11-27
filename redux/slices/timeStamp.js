import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/";

export const getRecentChanges = createAsyncThunk(
  "timeStamp/getData",
  async (args) => {
    try {
      const { data } = await axios.get(url + args.link);
      return { data: data.data, value: args.value };
    } catch (err) {
      console.log(err);
    }
  }
);

const timeStampSlice = createSlice({
  name: "timeStamp",
  initialState: {
    data: [],
    value: "some",
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecentChanges.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getRecentChanges.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      state.value = payload.value;
      state.isSuccess = true;
    });
    builder.addCase(getRecentChanges.rejected, (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    });
  },
});

export const { oneMinute } = timeStampSlice.actions;
export default timeStampSlice.reducer;
