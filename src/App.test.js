import App from './App';
import { render, screen } from '@testing-library/react';
import store from './store/index';
import wrapItWithRedux from './utils/wrapItWithRedux';

describe('App', () => {
  test('displays a title', () => {
    const { getByTitle } = render(wrapItWithRedux(App, store));
    expect(getByTitle('title').innerHTML).toContain('Search Hacker News');
  });

  test('rendered App matches snapshot', () => {
    wrapItWithRedux(App, store);
    expect(screen).toMatchSnapshot();
  });
});
