import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './Input.component';

describe('SearchBar', () => {
  it('has a text input', () => {
    const wrapped = shallow(<SearchBar />);
    console.log(wrapped.find('input'));
    expect(wrapped.find('input')).toBeTruthy();
  });
});
