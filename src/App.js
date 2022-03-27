import Navbar from "./views/pages/navbar/Navbar";
import Home from "./views/pages/home/Home";
import About from "./views/pages/about/About";
import Contact from "./views/pages/contact/Contact";
import "./style/nav.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableFilter from "./views/pages/test/TableFilter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<TableFilter />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
