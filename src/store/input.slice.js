import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { inputValue: '' },
  reducers: {
    setInputValue(state, action) {
      const newSearchInputValue = action.payload;
      state.input = newSearchInputValue;
      console.log(state.inputValue);
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
