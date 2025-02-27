import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../auth/operations";

export const fetchWaterPer = createAsyncThunk(
  "fetchWaterPer",
  async (date, thunkApi) => {
    try {
      const { data } = await authApi.get(`/water/month/${date}`);

      return data.data.waterMonthByDay;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
