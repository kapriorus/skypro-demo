import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    set: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { set } = productsSlice.actions;

export default productsSlice.reducer;
