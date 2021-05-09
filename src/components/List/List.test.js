import List from './List.component';
import { render } from '@testing-library/react';
import store from '../../store/index';
import wrapItWithRedux from '../../utils/wrapItWithRedux';

describe('Input component', () => {
  test('displays news item', () => {
    const { getByTitle } = render(wrapItWithRedux(List, store));
    expect(getByTitle('newsItemDiv')).toBeInTheDocument();
  });

  test('returns default state', () => {
    const { getByTitle } = render(wrapItWithRedux(List, store));
    expect(getByTitle('newsItemDiv').innerHTML).toContain(
      'Enter search term to populate.',
    );
  });
});
