import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = categorySlice;
export const { setCategories } = actions;
export default reducer;
