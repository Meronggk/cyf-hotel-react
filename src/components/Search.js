import React from "react";
import SearchButton from "../components/SearchButton";
import { useEffect, useState } from "react";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(event) {
    if (event) {
      search(searchInput);
      console.log(handleSearchInput);
    }
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={event => {
              event.preventDefault();
              handleSearchInput();
            }}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={event => setSearchInput(event.target.value)}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
