import React, { useState } from 'react';
import Input from '../src/components/Input/Input.component';
import List from '../src/components/List/List.component';
import styles from './App.module.css';

function App() {
  const [searchCriteria, setSearchCriteria] = useState('Search criteria...');
  // const [loading, setLoading] = useState(false);

  // const fetchNews = async () =>
  //   fetch(
  //     `http://hn.algolia.com/api/v1/search?query=${searchCriteria}&tags=story`,
  //   );

  return (
    <div className={styles.header}>
      <h1 className={null}>Search Hacker News</h1>
      <Input />
      <List />
    </div>
  );
}

export default App;
