import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePageTransition } from "../hooks/usePageTransition";

function Section({ children }) {
  const { close } = usePageTransition();
  useEffect(() => {
    close();
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{type:"spring", damping: 20, stiffness: 100}}
      className="min-h-screen max-h-fit w-full flex pt-12 bg-background text-white"
    >
      {children}
    </motion.section>
  );
}

export default Section;
