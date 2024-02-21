import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ children, link }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(link);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-black border-4 border-header-text hover:border-white text-2xl font-semibold  w-full h-full"

    >
      {children}
    </button>
  );
}

export default Button;
