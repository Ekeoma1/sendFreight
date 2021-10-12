import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MobileSearchBar = () => {
  return (
    <div className="mobile-search-bar mobile">
      <div className="mobile-search-bar-input-wrapper">
        <input
          className="mobile-search-bar-input"
          type="text"
          placeholder="Search"
        />
        <button className="mobile-search-btn">Search</button>
      </div>

      <button className="close-mobile-search">
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
};

export default MobileSearchBar;
