import "./App.css";
import About from "./pages/About.jsx";
import HomePage from "./pages/HomePage.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projexts.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
