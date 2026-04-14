
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {

  const [isAdmin, setIsAdmin] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://localhost:7142/api/Auth/login",
        {
          email: formData.email,
          password: formData.password
        }
      );

      console.log("Login Response:", response.data);

      // Save tokens
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      alert("Login Successful");

      // Role based redirect (optional)
      if (response.data.role === "Admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {

      console.log(error);

      if (error.response && error.response.data) {
        alert(error.response.data);
      } else {
        alert("Login failed. Please try again.");
      }

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h2>Welcome</h2>

        <p className="subtitle">
          Sign in to your account to continue
        </p>

        <div className="toggle-wrapper">

          <button
            type="button"
            className={!isAdmin ? "active-btn" : ""}
            onClick={() => setIsAdmin(false)}
          >
            User Login
          </button>

          <button
            type="button"
            className={isAdmin ? "active-btn" : ""}
            onClick={() => setIsAdmin(true)}
          >
            Admin Login
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <label>
            {isAdmin
              ? "Admin Email or Username"
              : "Email or Username"}
          </label>

          <input
            type="text"
            name="email"
            placeholder={
              isAdmin
                ? "Enter admin email or username"
                : "Enter your email or username"
            }
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            {isAdmin ? "Admin Login" : "Login"}
          </button>

        </form>

        {!isAdmin && (
          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/register">Sign up here</Link>
          </p>
        )}

      </div>

    </div>

  );

}

