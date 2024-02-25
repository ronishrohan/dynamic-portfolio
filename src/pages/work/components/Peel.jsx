import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { icons } from '../../../util/icons'

function Peel({hovered, size}) {
  return (
    <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{type: "spring", damping: 20}}
              style={{width: size, height: size,fontSize: size/1.5}}
              className=" bg-header-text absolute right-0 top-0 origin-top-right grid place-items-center z-50 overflow-hidden"
            >
                <span style={{clipPath: "polygon(0% 0%, 50% 50%, 100% 100%, 0% 100%)"}} className="absolute h-full w-full bg-gray-900 z-20 bottom-0 right-0 scale-150" ></span>
                <span className="text-black absolute right-0  top-0 font-black -rotate-45">{icons.arrow}</span>
            </motion.div>
          )}
        </AnimatePresence>
  )
}

export default Peel