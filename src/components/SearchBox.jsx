import css from "../App.module.css";


const SearchBox = ({ filter, onFilterChange }) => {
    return (
      <input
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={onFilterChange}
        className={css.searchbox}
      />
    );
  };
  
  export default SearchBox;