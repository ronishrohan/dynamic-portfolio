import React from "react";
import { AnimatePresence, motion, spring } from "framer-motion";

function Transition({ enabled }) {
  return (
    <AnimatePresence>
      {enabled && (
        <motion.div
          initial={{ y: "100%", borderTopRightRadius: "50%", borderTopLeftRadius: "50%" }}
          animate={{ y: "0%" , borderTopRightRadius: "0%", borderTopLeftRadius: "0%" }}
          exit={{ y: "100%", borderTopRightRadius: "50%", borderTopLeftRadius: "50%" }}
          transition={{type: "spring", damping: 20}}
          className="fixed w-full h-screen overflow-hidden bg-black z-50 text-white"
        >
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Transition;
