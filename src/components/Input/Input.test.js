import React from 'react';
import Input from './Input.component';
import { render, screen, fireEvent } from '@testing-library/react';
// import {  } from '@testing-library/user-event';
// import { render, fireEvent, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
// import inputActions from '../../store/input.slice';
// import listActions from '../../store/list.slice';

describe('Input component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test('has a text input', () => {
    render(<Input />);
    const searchInput = screen.getByTitle('searchInput');
    expect(searchInput).toBeInTheDocument();
  });

  test('handleChange is called by ...', () => {
  // const mockSetInputValue = jest.fn();
  render(<Input />);
  fireEvent.change(
    screen.getByPlaceholderText('What would you like to search?'),
    {
      target: { value: 'test' },
    },
  );
  const searchInput = screen.getByTitle('searchInput');
  expect(searchInput.value).toEqual('test');
  
});
}
