import { createSlice } from '@reduxjs/toolkit';

const search = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    search: (state) => {
      state.value = state.value + 1;
    },
  },
});

export const { increment, decrement } = search.actions;

export default search.reducer;
