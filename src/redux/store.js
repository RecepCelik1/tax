import { configureStore } from '@reduxjs/toolkit'
import modalFunc from './modalSlice'
import stateSlice from './stateSlice'

export const store = configureStore({
  reducer: {
    modal : modalFunc,
    states : stateSlice,
  },
})