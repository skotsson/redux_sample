import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../store/list.slice';

const List = () => {
  const news = useSelector((state) => state.list.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const newsList = news.map((newsItem, i) => {
    return <ul key={i}>{newsItem.title}</ul>;
  });

  return newsList;
  // return null;
};

export default List;
