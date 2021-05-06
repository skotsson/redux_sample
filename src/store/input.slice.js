import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { input: '' },
  reducers: {
    setInputValue(state, action) {
      const newSearchInputValue = action.payload;
      state.input = newSearchInputValue;
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
