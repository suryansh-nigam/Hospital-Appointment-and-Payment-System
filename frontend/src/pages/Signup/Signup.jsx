import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await fetch("https://localhost:7142/api/Auth/register", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })

      });

      const data = await response.text();

      if (response.ok) {

        alert(data);
        console.log(data);

      } else {

        alert(data);

      }

    } catch (error) {

      console.error(error);
      alert("Server Error");

    }

  };

  return (
    <div className="signup-wrapper">

      <div className="signup-card">

        <h3>Create Account</h3>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Create Account</button>

          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>

        </form>

      </div>

    </div>
  );
}