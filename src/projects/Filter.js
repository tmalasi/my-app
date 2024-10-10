import React from "react";

function Filter({ filters, onFilterChange }) { // Accept onFilterChange as a prop
  return (
    <div className="filter-buttons text-center">
      {filters.map((filter) => (
        <button
          key={filter}
          className="filter-btn"
          onClick={() => onFilterChange(filter)} // Call the filtering function
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filter;
