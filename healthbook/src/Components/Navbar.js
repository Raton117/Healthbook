import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const CreateNavbar = ({ isLoggedIn }) => {
  console.log("CreateNavbar");
  //console.log(isLoggedIn);
  let [loginStatus, setloginStatus] = useState({ isLoggedIn });
  const handleSubmit = () => {
    console.log("navbar");
    console.log(loginStatus);
    setloginStatus(!loginStatus);

    console.log(loginStatus);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{}}>
        <div className="container-fluid ">
          <a className="navbar-brand" style={{ paddingLeft: "5px" }}>
            HealthBook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  style={{ paddingLeft: "10px" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/prescriptionupload"
                  className="nav-link active"
                  aria-current="page"
                  style={{ paddingLeft: "10px" }}
                >
                  Prescriptions
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ paddingLeft: "10px" }}
                >
                  Tests
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ paddingLeft: "10px" }}
                >
                  Current Treatments
                </a>
              </li>
            </ul>
            {!loginStatus ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link active"
                    aria-current="page"
                    style={{ paddingLeft: "720px" }}
                    onClick={handleSubmit}
                  >
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className="nav-link active"
                    aria-current="page"
                    style={{ paddingLeft: "10px" }}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link active"
                    aria-current="page"
                    style={{ paddingLeft: "520px" }}
                    onClick={handleSubmit}
                  >
                    Log Out
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default CreateNavbar;
