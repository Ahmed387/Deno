import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getitems = createAsyncThunk("getitemss/getitems", async function () {
  try {
    let response = await axios.get(
      "https://flydental.runasp.net/api/Bookings/getbookingsall"
    );
    //    console.log(response?.data);
    return response?.data;
  } catch (error) {
    //      console.log(error);
    throw new Error(
      error?.response?.data || "Something went wrong in get the data"
    );
  }
});

let initialState = {
  items: [],
};

export let getitemslice = createSlice({
  name: "getitemss",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getitems.fulfilled, (state, action) => {
      state.items = action?.payload;
    });
  },
});

export let getData = getitemslice.reducer;
