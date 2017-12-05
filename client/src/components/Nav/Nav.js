import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          My Gym APP
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ? "active" : "" }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={window.location.pathname === "/about" ? "active" : ""}
        >
          <Link to="/about">About Us</Link>
        </li>
        <li
          className={window.location.pathname === "/personalTraining" ? "active" : ""}
        >
          <Link to="/personalTraining">Personal Training</Link>
        </li>
        <li className={window.location.pathname === "/Schedules" ? "active" : ""}>
          <Link to="/classSchedules">Class Schedules</Link>
        </li>
        <li className={window.location.pathname === "/gymHours" ? "active" : ""}>
          <Link to="/gymHours">Gym Hours</Link>
        </li>
        <li className={window.location.pathname === "/location" ? "active" : ""}>
          <Link to="/location">Location</Link>
        </li>
        <li className={window.location.pathname === "/contactUs" ? "active" : ""}>
          <Link to="/contactUs">Contact Us</Link>
        </li>
        <li className={window.location.pathname === "/admin" ? "active" : ""}>
          <Link to="/classSchedules/admin">Admin/Log In</Link>
        </li>
      </ul>
    </div>

  </nav>;

export default Navbar;
