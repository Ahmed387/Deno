import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let additems = createAsyncThunk(
  "reservation/additems",
  async function (values) {
    try {
      let response = await axios.post(
        "https://flydental.runasp.net/api/Bookings/createbooking",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      return response?.data;
    } catch (error) {
      console.log(error);
      throw new Error(
        error?.response?.data || "Something went wrong in add a new data"
      );
    }
  }
);

let initialState = {
  items: [],
};

export let reservationslice = createSlice({
  name: "reservations",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(additems.fulfilled, (state, action) => {
      state.items = action?.payload;
    });
  },
});

export let reservationreducer = reservationslice.reducer;
