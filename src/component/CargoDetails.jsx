import React, { useState } from "react";

const CargoDetails = () => {
  const [activeBtn, setActiveBtn] = useState(true);

  const toggleBtn = () => {
    setActiveBtn(!activeBtn);
  };
  return (
    <div className="dashboard-card mt-20">
      <div className="cargo-details-header">
        <h2 className="cargo-details-top-text">Cargo Details</h2>
        <div className="danger-cargo-details mt-10">
          <div className={`toggle-btn-bg ${activeBtn && "active"}`}>
            <button onClick={toggleBtn} className="toggle-btn"></button>
          </div>
          {/* <div>
            <label className="switch">
              <input className="switch-input" type="checkbox" checked />
              <span className="slider round"></span>
            </label>
          </div> */}
          <p className="cargo-details-top-text">
            Dangerous Cargo (ex. Chemcals and battery)
          </p>
        </div>
      </div>

      <div>
        <div className="tot-dom-pac-details mt-10">
          <button className="active">Total Dimensions</button>
          <button>Package Details</button>
        </div>
      </div>

      <div className="number-input-holder">
        <div className="number-input-container mr-20 mb-20">
          <div className="total-vol-wrapper">
            <input className="number-input" type="number" />
            <div>cbm</div>
          </div>
          <div className="num-input-placeholder">Total-volume</div>
        </div>

        <div className="number-input-container mb-20">
          <div className="total-vol-wrapper">
            <input className="number-input" type="number" />
            <div>kg</div>
          </div>
          <div className="num-input-placeholder">Total Weight</div>
        </div>
      </div>
    </div>
  );
};

export default CargoDetails;
