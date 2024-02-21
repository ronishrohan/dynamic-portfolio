import React from "react";
import { Link } from "react-router-dom";

function NavLink({ children, ...others }) {
  return (
    <Link
      className="h-full place-items-center grid px-4 transition-colors hover:text-white"
      {...others}
    >
      {children}
    </Link>
  );
}

export default NavLink;
