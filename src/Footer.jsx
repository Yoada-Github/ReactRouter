import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <h4>Features</h4>
        <nav>
          <NavLink to="/features/cool-stuff">Cool stuff</NavLink>
          <NavLink to="/features/random-feature">Random feature</NavLink>
          <NavLink to="/features/team-feature">Team feature</NavLink>
        </nav>
      </div>
      <div>
        <h4>Resources</h4>
        <nav>
          <NavLink to="/resources/resource">Resource</NavLink>
          <NavLink to="/resources/resource-name">Resource name</NavLink>
        </nav>
      </div>
      <div>
        <h4>About</h4>
        <nav>
          <NavLink to="/about/team">Team</NavLink>
          <NavLink to="/about/locations">Locations</NavLink>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
