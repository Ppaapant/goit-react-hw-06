import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filtersSlice";

import css from "../App.module.css";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

    return (
      <input
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className={css.searchbox}
      />
    );
  };
  
  export default SearchBox;