import React, { useState } from "react";
import Peel from "./Peel";
import { AnimatePresence, motion } from "framer-motion";

function Project({ repo }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={repo.homepage}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-2  w-full h-48 overflow-hidden bg-black border-2 border-transparent hover:border-header-text transition-colors"
    >
      <Peel hovered={hovered} size={28}></Peel>
      <div className="flex flex-col  items-baseline">
        <h1 className="m-0 text-lg font-bold">{repo.name.replace("-", " ").toUpperCase()}</h1>
        <AnimatePresence>
          {hovered && (
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{y: "100%"}}
              transition={{type: "spring", damping: 20}}
              className="bottom-0 box-border text-lg absolute bg-black m-0 w-full font-bold p-2 z-10"
            >
              {repo.description}
            </motion.h2>
          )}
        </AnimatePresence>
        <div>
          <span className="text-9xl font-black italic text-header-text">
            {repo.name.replace("-", " ").toUpperCase()}
          </span>
        </div>
      </div>
    </a>
  );
}

export default Project;
