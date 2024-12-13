import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => (
  <header className="header">
    <div className="header-left">
      <h1>Nessa's Kitchen</h1>
      <h2>Made With Love to Satisfy Your Tastebuds</h2>
    </div>
    <nav className="nav-tabs">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Menu
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Header;
