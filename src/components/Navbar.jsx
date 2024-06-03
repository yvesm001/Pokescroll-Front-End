import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ padding: "20px" }}
    >
      <NavLink className="navbar-brand" to="/">
        Pokedex
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/MyPokedex">
              My Pokedex
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/MyParty">
              My Party
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
