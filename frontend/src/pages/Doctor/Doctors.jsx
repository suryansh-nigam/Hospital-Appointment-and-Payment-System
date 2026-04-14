import React from "react";

//add assets/assets.js file and export doctors data from there and import here
import { doctors } from "../../assets/assets";



const Doctors = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Doctors</h2>

      <div className="row">
        {doctors.map((doc) => (
          <div className="col-md-4 mb-4" key={doc._id}>
            <div className="card h-100 shadow">
              <img
                src={doc.image}
                className="card-img-top"
                alt={doc.name}
              />

              <div className="card-body">
                <h5 className="card-title">{doc.name}</h5>
                <p className="card-text">
                  <b>Speciality:</b> {doc.speciality}
                </p>
                <p>
                  <b>Experience:</b> {doc.experience}
                </p>
                <p>
                  <b>Fees:</b> ₹{doc.fees}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;