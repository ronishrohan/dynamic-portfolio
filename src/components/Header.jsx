import React from "react";
import NavLink from "./header/NavLink";

function Header() {
  return (
    <header className="w-full fixed h-12  text-lg font-bold bg-header text-header-text flex justify-between items-center">
      <span className="ml-4 ">RONISH ROHAN</span>
      <div className="h-full flex items-center">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/work">WORK</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </header>
  );
}

export default Header;
