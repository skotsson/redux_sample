import React from 'react';
import { useSelector } from 'react-redux';
import styles from './List.module.css';

const List = () => {
  const news = useSelector((state) => state.list.news);

  return news.map((newsItem, i) => (
    <div className={styles.list} key={`item_${i}`}>
      {newsItem.title}
    </div>
  ));
};

export default List;
