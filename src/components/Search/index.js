import './Search.css';

const Search = ({ changeHandler, inputValue }) => {
  return (
    <div className="Search">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        name="search"
        id="search"
        value={inputValue}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};

export default Search;
