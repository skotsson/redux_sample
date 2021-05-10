import Input from './Input.component';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import store from '../../store/index';
import wrapItWithRedux from '../../utils/wrapItWithRedux';

describe('Input component', () => {
  test('contains a text input', () => {
    render(wrapItWithRedux(Input, store));
    const searchInput = screen.getByTitle('searchInput');
    expect(searchInput).toBeInTheDocument();
  });

  test('search input receives new value', () => {
    const { getByTitle } = render(wrapItWithRedux(Input, store));
    userEvent.type(getByTitle('searchInput'), 'test input');
    expect(getByTitle('searchInput')).toHaveValue('test input');
  });
});
