import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/home" className="accueil" activeClassName="active">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className="accueil" activeClassName="active">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
