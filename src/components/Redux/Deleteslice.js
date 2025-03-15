import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let deleteitem = createAsyncThunk(
  "reservation/deleteitem",
  async function (id) {
    try {
      let response = await axios.delete(
        `https://flydental.runasp.net/api/Bookings/deletebooking/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      return id; 
    } catch (error) {
      console.log(error);
      throw new Error(
        error?.response?.data || "Something went wrong in deleting the data"
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
    builder.addCase(deleteitem.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    });
  },
});

export let Deletereducer = reservationslice.reducer;
