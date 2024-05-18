import { useState, useEffect, useCallback } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import { countries } from './data/data';

function App() {
  return (
    <div className="App">
      <h1>Countries</h1>
        <hi>Countries</hi> 
        <List countries={countries}/>
      <List countries={displayCountries} />
    </div>
  );
}

export default App;
