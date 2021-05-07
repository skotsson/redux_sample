import React from 'react';
import Input from './Input.component';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/index';

describe('Input component', () => {
  test('has a text input', () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>,
    );
    const searchInput = screen.getByTitle('searchInput');
    expect(searchInput).toBeInTheDocument();
  });

  test('handleChange is called by ...', () => {
    render(
      <Provider store={store}>
        <Input />
      </Provider>,
    );
    fireEvent.change(
      screen.getByPlaceholderText('What would you like to search?'),
      {
        target: { value: 'test' },
      },
    );
    const searchInput = screen.getByTitle('searchInput');
    expect(searchInput.value).toEqual('test');
  });
});
