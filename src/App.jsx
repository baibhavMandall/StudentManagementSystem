import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Administration from "./components/Administration"; // Fixed spelling
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Register from "./components/register";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgotPassword";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/administration" element={<Administration />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgetPassword />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
