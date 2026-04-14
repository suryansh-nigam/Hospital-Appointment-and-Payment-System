import "./BookAppointment.css";
import { useState, useRef } from "react";

export default function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState(1);

  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialty: "Cardiology",
    },
    {
      name: "Dr. Anjali Mehta",
      specialty: "Orthopedics",
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "General Medicine",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const isFormValid =
    selectedDoctor && selectedDate && selectedTime;

  const handleSubmit = () => {
    if (!isFormValid) return;

    alert("Appointment Submitted Successfully for Approval!");

    // reset
    setSelectedDoctor(null);
    setSelectedDate("");
    setSelectedTime(null);
    setNotes("");
    setStep(1);
  };

  return (
    <div className="book-container">
      <h1>Book an Appointment</h1>
        <p className="subtitle">
            Easily book your appointment with our expert doctors. Just select a doctor, choose a convenient date and time, and provide any additional information for a seamless healthcare experience.
        </p>

      {/* STEP 1 */}
      <div className="doctor-section">
        <h2>Step 1: Select a Doctor</h2>

        <div className="doctor-grid">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className={`doctor-card ${
                selectedDoctor?.name === doc.name ? "active-doctor" : ""
              }`}
            >
              <h4>{doc.name}</h4>
              <p className="specialty">{doc.specialty}</p>
              <p>Specialist in cardiovascular diseases with 12 years of experience.</p>
              <p>Availability: Mon - Fri, 9:00 AM - 5:00 PM</p>


              <button
                className="btn-teal"
                onClick={() => {
                  setSelectedDoctor(doc);
                  setStep(2);
                  setTimeout(() => {
                    step2Ref.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 200);
                }}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 2 */}
      {step >= 2 && (
        <div className="doctor-section" ref={step2Ref}>
          <h2>Step 2: Choose Date & Time</h2>

          <div className="date-time-row">
            <div className="date-box">
              <label>Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            <div className="time-box">
              <label>Select Time</label>
              <div className="time-grid">
                {timeSlots.map((time, index) => (
                  <button
                    key={index}
                    className={`time-btn ${
                      selectedTime === time ? "selected-time" : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="notes-section">
            <label>Additional Notes (Optional)</label>
            <textarea
              placeholder="Any additional information for the doctor..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="btn-row">
            <button className="btn-outline" onClick={() => setStep(1)}>
              Back
            </button>

            <button
              className="btn-teal"
              onClick={() => {
                if (isFormValid) {
                  setStep(3);
                  setTimeout(() => {
                    step3Ref.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 200);
                }
              }}
            >
              Continue to Review
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="doctor-section" ref={step3Ref}>
          <h2>Step 3: Review & Confirm</h2>

          <div className="review-box">
            <div className="review-row">
              <span>Doctor:</span>
              <span>
                {selectedDoctor.name} - {selectedDoctor.specialty}
              </span>
            </div>

            <div className="review-row">
              <span>Date:</span>
              <span>{selectedDate}</span>
            </div>

            <div className="review-row">
              <span>Time:</span>
              <span>{selectedTime}</span>
            </div>

            <hr />

            <div>
              <strong>Notes:</strong>
              <p>{notes || "Regular appointment without special notes."}</p>
            </div>
          </div>

          <p className="review-info">
            Your appointment will be reviewed by our admin team.
            You will receive a confirmation email once it is approved.
          </p>

          <div className="btn-row">
            <button className="btn-outline" onClick={() => setStep(2)}>
              Back
            </button>

            <button
              className="btn-green"
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Submit for Approval
            </button>
          </div>
        </div>
      )}
    </div>
  );
}