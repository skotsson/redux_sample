import { fetchNews } from '../../store/list.slice';
import { inputActions } from '../../store/input.slice';
import styles from './Input.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(inputActions.setInputValue(event.target.value));
    dispatch(fetchNews(event.target.value));
  };

  const inputValue = useSelector((state) => state.input.input);
  return (
    <div className={styles.wrapper}>
      <input
        title='searchInput'
        size='50'
        type='text'
        value={inputValue}
        placeholder='What would you like to search?'
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
