function Filter({ filters}){
    return (
      <div className="filter-buttons text-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className="filter-btn"
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }
  
  export default Filter;