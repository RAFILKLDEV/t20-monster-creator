import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const ndSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    set: (state, action) => {
        state.value = action.payload
    },
  },
})

export const { set } = ndSlice.actions

export default ndSlice.reducer