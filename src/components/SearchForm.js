import React, { useState } from "react";

export default function SearchForm(props) {
  const handleChange = e => {
    //somehow needs to filter displayed data...
    // for each item in the array, see if it contains the search term
    // and display it if it does
    props.searchFn(e.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="searchFilter"
          onChange={handleChange}
        ></input>
      </form>
    </section>
  );
}
