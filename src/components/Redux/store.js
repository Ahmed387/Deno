import { configureStore } from "@reduxjs/toolkit";
import { reservationreducer } from "./reservationslice";
import { getData } from "./getitemslice";
import { Deletereducer } from "./Deleteslice";
import { Searchreducer } from "./Searchslice";

export const store = configureStore({
  reducer: {
    reservationred: reservationreducer,
    getallData: getData,
    Deletered: Deletereducer,
    searchData: Searchreducer,
  },
});
