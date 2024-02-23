import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons } from "../../../util/icons";
import Peel from "./Peel";

function Current({repo}) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <a
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        href={repo.homepage}
        className="relative p-4 flex flex-col gap-4 cursor-pointer bg-black border-2 border-transparent transition-colors hover:border-header-text"
      >
        <Peel hovered={hovered}  size={38}></Peel>
        <h1 className="m-0 text-xl font-bold">Currently working on</h1>
        <div className="flex min-h-48 w-full gap-4">
          <div  className="bg-black h-48 w-80 overflow-hidden border-2 border-header-text" >
            <span className="text-9xl font-black italic text-header-text">{repo.name.replace('-', ' ').toUpperCase()}</span>
          </div>
          <div>
            <span className="flex items-baseline gap-2">
              <h1 className="m-0 text-xl font-bold">{repo.name.replace('-', ' ').toUpperCase()}</h1>
              <h2 className="m-0 text-lg font-semibold">
                {repo.description}
              </h2>
            </span>
          </div>
        </div>
      </a>
    </>
  );
}

export default Current;
