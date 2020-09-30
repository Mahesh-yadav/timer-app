import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    pausedValue: 0,
    isPaused: false,
  },
  reducers: {
    setPausedValue: (state, action) => {
      state.pausedValue = action.payload;
    },
    setCounterValue: (state, action) => {
      state.value = action.payload;
    },
    pauseResumeTimer: (state) => {
      state.isPaused = !state.isPaused;
    },
  },
});

export const {
  setCounterValue,
  setPausedValue,
  pauseResumeTimer,
} = counterSlice.actions;

export default counterSlice.reducer;
