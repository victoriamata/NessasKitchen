import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Header from "./components/Header";
import FooterTabs from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <FooterTabs />
      </div>
    </Router>
  );
};

export default App;
