import React from 'react';
import Input from '../src/components/Input/Input.component';
import List from '../src/components/List/List.component';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.header}>
      <h1>Search Hacker News</h1>
      <Input />
      <List />
    </div>
  );
}

export default App;
