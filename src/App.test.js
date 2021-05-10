import App from './App';
import { render, screen } from '@testing-library/react';
import store from './store/index';
import wrapItWithRedux from './utils/wrapItWithRedux';

describe('App', () => {
  test('displays a title', () => {
    render(wrapItWithRedux(App, store));
    expect(screen.getByText(/Search Hacker News/)).toBeVisible();
  });

  test('rendered App matches snapshot', () => {
    wrapItWithRedux(App, store);
    expect(screen).toMatchSnapshot();
  });
});
