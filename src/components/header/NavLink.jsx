import React from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import { usePageTransition } from "../../hooks/usePageTransition";
import { useNavigate, useLocation } from "react-router-dom";

function NavLink({ children, to }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { open, close } = usePageTransition();
  function handleClick(e) {
    if (pathname != to) {
      e.preventDefault();

      open();
      setTimeout(() => {
        navigate(to);
      }, 1000);
    }
  }
  return (
    <Link
      onClick={handleClick}
      style={{color: pathname == to && "white"}}
      className="h-full place-items-center grid px-4 transition-colors hover:text-white"
      to={to}
    >
      {children}
    </Link>
  );
}

export default NavLink;
