import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const news = useSelector((state) => state.list.news);

  const newsList = news.map((newsItem, i) => {
    return <ul key={i}>{newsItem.title}</ul>;
  });

  return newsList;
};

export default List;
