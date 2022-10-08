import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  points: 0,
};

export const ndSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setPoints: (state, action) => {
      state.points++
    },
    setPoints2: (state, action) => {
      state.points--
    },
  },
});

export const { setValue, setPoints } = ndSlice.actions;

export default ndSlice.reducer;
