import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>Company name</h3>
      <nav>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/enterprise">Enterprise</NavLink>
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
    </header>
  );
}

export default Header;
