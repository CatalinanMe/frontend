import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Inicio
      </Link>
      <div className="menu"></div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <ul>
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
    </nav>
  );
};
