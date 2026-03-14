import React, { useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Uy-joylarni qidirish..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;