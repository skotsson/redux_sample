import React from 'react';
import SearchBar from '../src/components/searchBar/SearchBar';
import ResultsList from '../src/components/resultsList/ResultsList';
import styles from './App.css';

function App() {
  return (
    <div className={styles.header}>
      <h1 className={styles.App}>Search Hacker News</h1>
      <SearchBar />
      <ResultsList />
    </div>
  );
}

export default App;
