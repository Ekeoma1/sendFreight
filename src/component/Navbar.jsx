import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [mobileSearchNav, setMobileSearchNav] = useState(true);

  const toggleMobSearchNav = () => {
    setMobileSearchNav(!mobileSearchNav);
  };
  return (
    <nav>
      <div className="logo">
        send <span>FREIGHT</span>
      </div>

      <div className="desktop nav-search-box-wrapper">
        <input className="nav-search-box" placeholder="Search" type="text" />
        <SearchIcon className="nav-search-icon" fontSize="small" />
      </div>
      <div className="nav-btn-wrapper desktop">
        <button className="pri-btn mr-20">Request Quote</button>
        <button className="sec-btn">Book Shipment</button>
      </div>

      <div className="mobile mobile-nav-icon-wrapper">
        <button onClick={toggleMobSearchNav}>
          <SearchIcon />
        </button>

        <button>
          <MenuIcon />
        </button>
      </div>

      {/* MobileSearchBar  */}
      <div className={`mobile-search-bar ${mobileSearchNav && "d-none"}`}>
        <div className="mobile-search-bar-input-wrapper">
          <input
            className="mobile-search-bar-input"
            type="text"
            placeholder="Search"
          />
          <button className="mobile-search-btn">Search</button>
        </div>

        <button onClick={toggleMobSearchNav} className="close-mobile-search">
          <AiOutlineCloseCircle />
        </button>
      </div>

      
    </nav>
  );
};

export default Navbar;
