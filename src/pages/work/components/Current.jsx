import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Current() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <a
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        href="https://github.com/ronishrohan/portfolio"
        className="relative p-4 flex flex-col gap-4 cursor-pointer bg-black border-2 border-transparent transition-colors hover:border-header-text"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{type: "spring", damping: 20}}
              className="size-14 bg-header-text absolute right-0 top-0 origin-top-right grid place-items-center"
            >
                <span style={{clipPath: "polygon(0% 0%, 50% 50%, 100% 100%, 0% 100%)"}} className="absolute h-full w-full bg-gray-900 z-20" ></span>
                <span className="text-black font-black text-4xl">{"%"}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className="m-0 text-xl font-bold">Currently working on</h1>
        <div className="flex min-h-48 w-full gap-4">
          <img src="" className="bg-white min-h-full min-w-72" alt="" />
          <div>
            <span className="flex items-baseline gap-2">
              <h1 className="m-0 text-xl font-bold">PORTFOLIO WEBSITE</h1>
              <h2 className="m-0 text-lg font-semibold">
                a website for my portfolio
              </h2>
            </span>
          </div>
        </div>
      </a>
    </>
  );
}

export default Current;
