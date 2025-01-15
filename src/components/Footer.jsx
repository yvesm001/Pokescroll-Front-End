import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-3 my-4 " style={{ color: "white" }}>
      <ul className="nav justify-content-center border-botton pd-3 mb-3">
        <Link to="/" className="nav-link px-2 text-muted">
          Home
        </Link>
        <Link to="/About" className="nav-link px-2 text-muted">
          About Us
        </Link>
        <Link to="/MyParty" className="nav-link px-2 text-muted">
          My Party
        </Link>
        <Link
          to="https://github.com/yvesm001/react-project-2-front"
          className="nav-link px-2 text-muted"
        >
          GitHub
        </Link>
      </ul>
      <h5 className="text-center text-muted">© 2024 Victor M Ortiz Martinez</h5>
    </footer>
  );
}

export default Footer;
