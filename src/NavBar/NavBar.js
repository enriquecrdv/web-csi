// src/NavBar/NavBar.js
import React from "react";
import "./NavBar.css";
import logo from "../Logos/CSIlogo_blanco.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <a href="/about">Acerca de Nosotros</a>
      <a href="/projects">Proyectos</a>
      <a href="/blog">Blog</a>
      <a href="/courses">Cursos</a>
      <a href="/resources">Recursos</a>
      <a href="/events">Eventos</a>
      <a href="/contact">Contacto</a>
      <a href="/user" className="user-link">
        Usuario
      </a>
    </div>
  );
};

export default NavBar;
