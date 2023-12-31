import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stateSlice : null,
}

export const stateSlice = createSlice({
  name: 'stateSlice',
  initialState,
  reducers: {
    stateFunc: (state, action) => {
        state.stateSlice = action.payload
    },
  },
})

export const { stateFunc } = stateSlice.actions

export default stateSlice.reducer