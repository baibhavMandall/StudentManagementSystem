import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Administration from "./components/Administration"; // Fixed spelling
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
