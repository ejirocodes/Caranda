import React from "react";

const SearchParams = () => {
  const location = "San Francisco";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
