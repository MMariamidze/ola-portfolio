import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Example from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Example></Example>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Projects />} path="/projects" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
