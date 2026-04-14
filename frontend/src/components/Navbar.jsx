import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-5 py-3">
      <Link className="navbar-brand fw-bold" to="/">
        Medanta Hospital 
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto gap-4">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "fw-bold text-dark" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>


              <li className="nav-item">
            <Link className="nav-link" to="/doctors">
             Our Doctors
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/book-appointment">
              Book Appointment
            </Link>
          </li>




          <li className="nav-item">
           <Link className="nav-link" to="/my-appointments">
  My Appointments
</Link>
          </li>
             <li className="nav-item">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>

          <li className="nav-item">
  <a 
    className="nav-link" 
    href="https://hospital-locate.netlify.app/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Our Branches
  </a>
</li>

          
        </ul>

        <div className="d-flex align-items-center gap-4">
         

          <Link to="/login" className="btn btn-teal px-4">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}