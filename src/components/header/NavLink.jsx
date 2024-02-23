import React from "react";
import { Link, useLinkClickHandler } from "react-router-dom";

import { useLocation } from "react-router-dom";

function NavLink({ children, to }) {
  const { pathname } = useLocation();
  return (
    <Link
      style={{ color: pathname == to && "white" }}
      className="h-full place-items-center grid px-4 transition-colors hover:text-white"
      to={to}
    >
      {children}
    </Link>
  );
}

export default NavLink;
