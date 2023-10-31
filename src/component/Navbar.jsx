import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logito.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Inicio
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/SobreNosotros">Sobre Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/Comunidad">Comunidad</NavLink>
        </li>
        <li>
          <NavLink to="/Educacion">Educación</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
      </ul>
      <div className="fixed-image">
        <img src={logo} alt="fixed-logo" className="fixed-logo" />
      </div>
    </nav>
  );
};
