import React, { useState } from "react";
import './Search.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // App ga yuboradi
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Uy qidirish..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;