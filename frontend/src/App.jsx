import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MyAppointment from "./pages/MyAppointment/MyAppointment";
import BookAppointment from "./pages/BookAppointment/BookAppointment";
import Blog from "./pages/Blog/Blog";
import Doctor from "./pages/Doctor/Doctors";
import AdminDashboard from "./pages/Admin/AdminDashboard";



function App() {
  return (
    <Router>
      <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/my-appointments" element={<MyAppointment />} />
          <Route path="/book-appointment" element={<BookAppointment />} />   
          <Route path="/blogs" element={<Blog />} />     
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/admin" element={<AdminDashboard />} />

          </Route>
      </Routes>
    </Router>
  );
}

export default App;