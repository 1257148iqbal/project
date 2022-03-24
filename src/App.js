import Navbar from "./views/pages/navbar/Navbar";
import Home from "./views/pages/home/Home";
import About from "./views/pages/about/About";
import Contact from "./views/pages/contact/Contact";
import "./style/nav.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
