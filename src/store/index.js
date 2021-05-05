import { configureStore } from '@reduxjs/toolkit';
import listSlice from './list.slice';
import inputSlice from './input.slice';

const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
    list: listSlice.reducer,
  },
});

export default store;
