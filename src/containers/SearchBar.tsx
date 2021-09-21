import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSearch } from "../state/actions";
import { getValue } from "../state/reducers";

function SearchBar() {
  const dispatch = useDispatch();
  const value = useSelector(getValue);
  const search = useCallback((val) => dispatch(actionSearch(val)), [dispatch]);

  return (
    <input
      placeholder="Search heroes"
      onChange={(e) => search(e.target.value)}
      value={value}
    />
  );
}

export default SearchBar;
