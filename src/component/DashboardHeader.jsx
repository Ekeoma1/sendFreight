import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const DashboardHeader = () => {
  return (
    <header style={{ position: "relative" }} className="dashboard-header">
      <h1>New Booking</h1>
      <p>
        Fill in the information below to get a quote or create a new booking
      </p>
      <button className="back-btn">
        <KeyboardBackspaceIcon className="" />
      </button>
    </header>
  );
};

export default DashboardHeader;
