import React from "react";
import { MdFlight } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { RiShipFill } from "react-icons/ri";
import { RiNurseFill } from "react-icons/ri";

const Service = () => {
  return (
    <div className="dashboard-card">
      <h2>Select a service</h2>

      <div className="service-card-wrapper">
        <div className="service-card active">
          <p>Air Freight</p>
          <MdFlight className="service-card-icon" />
        </div>
        <div className="service-card">
          <p>Sea Freight</p>
          <RiShipFill className="service-card-icon" />
        </div>
        <div className="service-card">
          <p>
            Inland <br /> (Truck & Barge)
          </p>
          <MdLocalShipping className="service-card-icon" />
        </div>
        <div className="service-card">
          <p>
            Custom <br /> Clearance
          </p>
          <RiNurseFill className="service-card-icon" />
        </div>
      </div>
    </div>
  );
};

export default Service;
