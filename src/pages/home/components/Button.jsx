import React from "react";
import { useNavigate } from "react-router-dom";
import { usePageTransition } from "../../../hooks/usePageTransition";

function Button({ children, link }) {
  const { open } = usePageTransition();
  const navigate = useNavigate();
  function handleClick() {
    if (link[0] == "/") {
      open();
      setTimeout(() => {
        navigate(link);
      }, 1000);
    } else {
      window.open(link);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-black border-4 border-header-text hover:border-white text-2xl font-semibold transition-colors w-full h-full"
    >
      {children}
    </button>
  );
}

export default Button;
