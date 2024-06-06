import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50 && isExpanded) {
      setIsExpanded(false);
    }
  };

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExpanded]);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
      style={{ padding: "20px" }}
    >
      <NavLink className="navbar-brand" to="/">
        Pokedex
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarSupportedContent"
        aria-expanded={isExpanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarSupportedContent">
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
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
