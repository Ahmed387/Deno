import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getspecialitem = createAsyncThunk(
  "reservation/getspecialitem",
  async function (id, { rejectWithValue }) {
    try {
      let response = await axios.get(
        `https://flydental.runasp.net/api/Bookings/getbookingbyid?id=${id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response?.data; // Return the fetched item's data
    } catch (error) {
      return rejectWithValue(error?.response?.data || "Item not found");
    }
  }
);

let initialState = {
  items: [],
  error: null,
};

export let searchslice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getspecialitem.fulfilled, (state, action) => {
      state.items = [action.payload]; 
      state.error = null;
    });
  },
});

export let Searchreducer = searchslice.reducer;
