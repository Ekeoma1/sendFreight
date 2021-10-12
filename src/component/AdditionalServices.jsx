import React from "react";

const AdditionalServices = () => {
  return (
    <div className="dashboard-card mt-20">
      <h2>Additionl Services</h2>

      <div className="additional-services-features-wrapper mt-20 mb-20">
        <div className="additional-services-features">
          <div className="mr-10">
            <label className="switch">
              <input className="switch-input" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div>
            <h4 className="mb-0 mt-0">Export Forwarding</h4>
            <p className="mt-5 additional-service-desc">
              We handle custom clearance and documentation
            </p>
          </div>
        </div>

        <div className="additional-services-features">
          <div className="mr-10">
            <label className="switch">
              <input className="switch-input" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div>
            <h4 className="mb-0 mt-0">Import Custom Clearance</h4>
            <p className="mt-5 additional-service-desc">
              We handle import custom and regulatory requirements
            </p>
          </div>
        </div>

        <div className="additional-services-features">
          <div className="mr-10">
            <label className="switch">
              <input className="switch-input" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div>
            <h4 className="mb-0 mt-0">Cargo Insurrance</h4>
            <p className="mt-5 additional-service-desc">
              We protect your cargo from logistics risk up to its full value
            </p>
          </div>
        </div>

        <div className="additional-services-features">
          <div className="mr-10">
            <label className="switch">
              <input className="switch-input" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <div>
            <h4 className="mb-0 mt-0">Transport / Delivery</h4>
            <p className="mt-5 additional-service-desc">
              We deliver the cargo to your doorstep from the port
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
