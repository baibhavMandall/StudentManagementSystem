import  { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Dashboard from "./components/pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume initially user is not logged in

  // Function to toggle login status
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to toggle logout status
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="container mx-auto p-4">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Protected route for the administration dashboard */}
          <Route
            exact
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
          />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          {/* Redirect to home if user is already logged in */}
          <Route
            exact
            path="/login"
            element={isLoggedIn ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />}
          />
          <Route
            exact
            path="/forgot-password"
            element={<ForgotPassword />}
          />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
