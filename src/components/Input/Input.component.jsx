import React, { useState } from 'react';
import { fetchNews } from '../../store/list.slice';
import styles from './Input.module.css';
import { useDispatch } from 'react-redux';

const Input = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(fetchNews(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <input
        size='50'
        type='text'
        value={searchTerm}
        placeholder='what would you like to search'
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
