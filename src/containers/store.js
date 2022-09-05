import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../reducers/ndSlice.js'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})
