import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";

const ShippingInfo = () => {
  return (
    <div className="dashboard-card mt-20">
      <InfoOutlinedIcon className="icon-header mt-5" />

      <div className="location-info-wrapper">
        <div className="mb-20">
          <button className="import-btn">Import</button>
          <button className="export-btn">Export</button>
        </div>

        <div className="mb-20">
          <div className="shipping-location-input-wrapper">
            <div className="shipping-location-icon">
              <FaMapMarkerAlt /> &nbsp; From
            </div>
            <input
              className="shipping-location-input"
              type="text"
              placeholder="City or Port"
            />
          </div>
        </div>

        <div className="mb-20">
          <div className="shipping-location-input-wrapper">
            <div className="shipping-location-icon">
              <FaMapMarkerAlt /> &nbsp; From
            </div>

            <input
              className="shipping-location-input"
              type="text"
              placeholder="City or Port"
            />
          </div>
        </div>
      </div>

      <div className="other-info-wrapper">
        <div className="mb-20">
          <div className="other-info-input-wrapper">
            <input
              className="other-info-input"
              placeholder="Ready Date"
              type="text"
            />
            <AiFillCalendar className="other-input-calendar" />
          </div>
        </div>

        <div className="mb-20">
          <div className="other-info-input-wrapper">
            <select className="other-info-input" name="" id="">
              <option value="incoterms">Incoterms</option>
            </select>
            {/* <input className="other-info-input" type="text" /> */}
          </div>
        </div>

        <div className="mb-20">
          <div className="other-info-input-wrapper">
            <input
              className="other-info-input"
              placeholder="Total Cargo Value"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
