import "./MyAppointment.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyAppointment() {
  const [filter, setFilter] = useState("All");

  const appointments = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "March 15, 2026",
      time: "10:00 AM",
      status: "Pending",
      payment: "Awaiting approval",
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "Orthopedics",
      date: "March 18, 2026",
      time: "2:30 PM",
      status: "Approved",
      payment: "Pay Now",
    },
    {
      doctor: "Dr. Emma Wilson",
      specialty: "General Medicine",
      date: "March 20, 2026",
      time: "11:00 AM",
      status: "Paid",
      payment: "Paid",
    },
    {
      doctor: "Dr. James Smith",
      specialty: "Neurology",
      date: "March 22, 2026",
      time: "3:00 PM",
      status: "Rejected",
      payment: "-",
    },
  ];

  const filteredAppointments =
    filter === "All"
      ? appointments
      : appointments.filter((a) => a.status === filter);

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "badge pending";
      case "Approved":
        return "badge approved";
      case "Paid":
        return "badge paid";
      case "Rejected":
        return "badge rejected";
      default:
        return "badge";
    }
  };

  return (
    <div className="appointments-container">
      {/* HEADER */}
      <div className="appointments-header">
        <div>
          <h1>My Appointments</h1>
          <p>View and manage all your scheduled appointments</p>
        </div>

        <Link to="/book" className="btn btn-teal">
          Book New Appointment
        </Link>
      </div>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        {["All", "Pending", "Approved", "Paid", "Rejected"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredAppointments.map((item, index) => (
              <tr key={index}>
                <td>
                  <strong>{item.doctor}</strong>
                  <div className="specialty">{item.specialty}</div>
                </td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <span className={getStatusClass(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td>
                  {item.payment === "Paid" ? (
                    <span className="badge paid">✓ Paid</span>
                  ) : (
                    item.payment
                  )}
                </td>
                <td>
                  <span className="view-link">View</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}