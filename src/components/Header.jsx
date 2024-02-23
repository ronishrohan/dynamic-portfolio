import React from "react";
import NavLink from "./header/NavLink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full fixed h-12 z-50 text-lg font-bold bg-header text-header-text flex justify-between items-center">
      <Link to="/" className="sm:ml-4 lg:flex  hidden">RONISH ROHAN</Link>
      <div className="h-full flex items-center">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/work">WORK</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </header>
  );
}

export default Header;
