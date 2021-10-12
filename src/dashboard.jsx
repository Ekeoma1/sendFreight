import React from "react";
import AdditionalServices from "./component/AdditionalServices";
import CargoDetails from "./component/CargoDetails";
import DashboardHeader from "./component/DashboardHeader";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import ShippingInfo from "./component/ShippingInfo";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <div className="custom-container">
          <DashboardHeader />
          <Service />
          <ShippingInfo />
          <CargoDetails />
          <AdditionalServices />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
