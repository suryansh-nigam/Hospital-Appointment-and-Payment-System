import React from "react";
import "./AdminDashboard.css";
import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

const AdminDashboard = () => {

  const appointments = [
    {
      patient: "John Doe",
      doctor: "Dr. Rohan Sharma (Cardiology)",
      date: "15 Mar 2026",
      status: "Approved",
    },
    {
      patient: "Priya Singh",
      doctor: "Dr. Neha Singh (Gynecology)",
      date: "16 Mar 2026",
      status: "Pending",
    },
    {
      patient: "Rahul Verma",
      doctor: "Dr. Arjun Mehta (Orthopedics)",
      date: "17 Mar 2026",
      status: "Rejected",
    },
    {
      patient: "Anjali Gupta",
      doctor: "Dr. Kavita Verma (Neurology)",
      date: "18 Mar 2026",
      status: "Approved",
    },
    {
      patient: "Vikas Yadav",
      doctor: "Dr. Priya Patel (Dermatology)",
      date: "19 Mar 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="topbar">
        <div>
          <h1>Admin Dashboard</h1>
          <p className="subtitle">Welcome back, Admin 👋</p>
        </div>
        <button className="admin-btn">Logout</button>
      </div>

      {/* Cards */}
      <div className="cards">

        <div className="card gradient-blue">
          <FaUsers className="card-icon" />
          <h3>Total Patients</h3>
          <p>1,245</p>
        </div>

        <div className="card gradient-green">
          <FaUserMd className="card-icon" />
          <h3>Total Doctors</h3>
          <p>45</p>
        </div>

        <div className="card gradient-orange">
          <FaCalendarCheck className="card-icon" />
          <h3>Total Appointments</h3>
          <p>320</p>
        </div>

        <div className="card gradient-purple">
          <FaMoneyBillWave className="card-icon" />
          <h3>Total Revenue</h3>
          <p>₹8,45,000</p>
        </div>

      </div>

      {/* Main Grid */}
      <div className="main-grid">

        {/* Table */}
        <div className="table-container">
          <h2>Recent Appointments</h2>

          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item, index) => (
                <tr key={index}>
                  <td>{item.patient}</td>
                  <td>{item.doctor}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`badge ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Panel */}
        <div className="side-panel">

          {/* Top Doctors */}
          <div className="panel-box">
            <h3>Top Doctors</h3>

            <div className="doctor-item">
              <p>Dr. Rohan Sharma</p>
              <span>Cardiologist</span>
            </div>

            <div className="doctor-item">
              <p>Dr. Neha Singh</p>
              <span>Gynecologist</span>
            </div>

            <div className="doctor-item">
              <p>Dr. Priya Patel</p>
              <span>Dermatologist</span>
            </div>
          </div>

          {/* Notifications */}
          <div className="panel-box">
            <h3>Notifications</h3>

            <p className="notify success">✔ Appointment Approved</p>
            <p className="notify pending">⏳ New Booking Request</p>
            <p className="notify cancel">❌ Appointment Cancelled</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;