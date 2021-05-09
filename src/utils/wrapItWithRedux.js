import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import { middleware, reducer } from '../store/index';

export const makeStore = () => {
  return configureStore({ reducer, middleware });
};

const componentWrapper = (Component, store, props = {}) => {
  return (
    <Provider store={store || makeStore()}>
      <Component {...props} />
    </Provider>
  );
};

export default componentWrapper;
