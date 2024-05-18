import { useState, useEffect, useCallback } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import { countries } from './data/data';
import useDebounce from './hooks/useDebounce';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [displayCountries, setDisplayCountries] = useState(countries);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const filterHandler = useCallback(() => {
    const filterCountries = countries.filter(({ name }) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayCountries(filterCountries);
  },[searchValue]);

  useDebounce(filterHandler, 1000)

  // useEffect(() => {
  //   const timer = setTimeout(filterHandler, 3000)

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchValue, filterHandler]);

  return (
    <div className="App">
      <h1>Countries</h1>
      <Search changeHandler={searchHandler} inputValue={searchValue} />
      <List countries={displayCountries} />
    </div>
  );
}

export default App;
