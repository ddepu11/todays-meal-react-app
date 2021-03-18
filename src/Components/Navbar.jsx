import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef(null);

  function handleMenu() {
    if (navRef.current.classList.contains("nav-show")) {
      navRef.current.classList.remove("nav-show");
    } else {
      navRef.current.classList.add("nav-show");
    }
  }

  return (
    <nav className="navbar">
      <ul ref={navRef} className="nav-ul flex">
        <li>
          <Link onClick={handleMenu} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link onClick={handleMenu} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} to="/services">
            Services
          </Link>
        </li>
        <FaRegWindowClose className="close" onClick={handleMenu} />
      </ul>
      <FaBars className="menu" onClick={handleMenu} />
    </nav>
  );
}
