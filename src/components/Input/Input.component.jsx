import React, { useState } from 'react';
import { inputActions } from '../../store/input.slice';
// import actions from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const Input = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  // const value = useSelector((state) => state.searchInput.searchInputValue);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const newSearchCriteria = searchTerm;
    dispatch(inputActions.setInputValue(newSearchCriteria));
  };

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        placeholder='what would you like to search'
        onChange={handleChange}
        // ref='searchValue'
      />
    </div>
  );
};

export default Input;
