import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  beforeEach(() => {});

  it('renders the SearchBar component', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find('SearchBar').length).toEqual(1);
  });
});
