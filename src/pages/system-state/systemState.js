import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
};

const userSlice = createSlice({
  name: "SystemState",
  initialState,
  reducers: {
    setShowSideMenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setShowSideMenu } = actions;
export default reducer;
