import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function Transition({ enabled }) {
  return (
    <AnimatePresence>
      {enabled && (
        <div className="fixed w-full h-screen overflow-hidden bg-black z-50 text-white">
          Transition
        </div>
      )}
    </AnimatePresence>
  );
}

export default Transition;
