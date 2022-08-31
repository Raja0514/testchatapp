import React from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand fw-folder fs-4 mx-4  " to="/">
               ChatApplication
              </Link>
            </ul>
            <Link
              className="btn btn-outline-light ms-2 px-4 rounted pill"
              to="/chat"
            >
             Join

            </Link>

            <Link
              className="btn btn-outline-light ms-2 px-1 rounded pill"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="btn btn-outline-light ms-2 px-4 rounted pill"
              to="/register"
            >
              Register
            </Link>
            
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
