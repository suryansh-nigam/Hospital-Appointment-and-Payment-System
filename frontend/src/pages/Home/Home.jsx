import "./Home.css";
import { Link } from "react-router-dom";
import dashboardImg from "../../assets/about_image.png";
import { doctors } from "../../assets/assets copy";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-left">
          <h1>
            Hospital <br />
            Appointment System
          </h1>

          <p>
            Takecare Hospital is a hospital appointment system website. It
            includes user and admin login, user registration, appointment
            booking with related doctors, and admin approval workflow.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="btn btn-teal">
              Login / Register
            </Link>

            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn How It Works
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-card">
            <img src={dashboardImg} alt="Dashboard Preview" />
          </div>
        </div>
      </div>

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
      

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <h2>How It Works</h2>
        <p className="section-subtitle">
          Simple steps to book your appointment and manage your healthcare efficiently.
        </p>

        <div className="card-grid">
          <div className="info-card">
            <div className="icon-box">👤</div>
            <h5>Register</h5>
            <p>Create your account with your personal information to get started.</p>
          </div>

          <div className="info-card">
            <div className="icon-box">📅</div>
            <h5>Book Appointment</h5>
            <p>Select your preferred doctor, date, and time for your visit.</p>
          </div>

          <div className="info-card">
            <div className="icon-box">✅</div>
            <h5>Admin Approval</h5>
            <p>Our admin team reviews and approves your appointment request.</p>
          </div>

          <div className="info-card">
            <div className="icon-box">💳</div>
            <h5>Payment & Confirmation</h5>
            <p>Complete payment and receive confirmation instantly.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-section">
        <h2>Why Choose Takecare?</h2>
        <p className="section-subtitle">
          Experience a modern healthcare appointment system designed for your convenience.
        </p>

        <div className="why-grid">
          <div>
            <div className="why-icon">⚡</div>
            <h5>Quick & Easy</h5>
            <p>Book appointments in just a few clicks with our streamlined process.</p>
          </div>

          <div>
            <div className="why-icon">🔒</div>
            <h5>Secure & Safe</h5>
            <p>Your health data is protected with enterprise-grade security standards.</p>
          </div>

          <div>
            <div className="why-icon">🩺</div>
            <h5>Professional Care</h5>
            <p>Access qualified doctors and professional healthcare services.</p>
          </div>
        </div>
      </section>

      
    </>
  );
}