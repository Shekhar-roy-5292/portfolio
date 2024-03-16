import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Skills from "./layouts/Skills";
import Services from "./layouts/Services";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import CustomJs from "./components/CustomJs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CustomJs />
      </BrowserRouter>
    </div>
  );
}

export default App;
