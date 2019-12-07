import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <NavLink to="/"> Home </NavLink>
    <NavLink to="/About"> About </NavLink>
    <NavLink to="/Contact"> Contact </NavLink>
    <NavLink to="/Projects"> Projects </NavLink>
  </nav>
);

export default NavBar;
