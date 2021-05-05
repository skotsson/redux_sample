import { createSlice } from '@reduxjs/toolkit';

const inputSlice = createSlice({
  name: 'input',
  initialState: { searchInputValue: '' },
  reducers: {
    setInputValue(state, action) {
      const newSearchInputValue = action.payload;
      state.value = newSearchInputValue;
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
