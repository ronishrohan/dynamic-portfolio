import { createContext, useContext, useState } from "react";
import Transition from "../components/Transition";
const TransitionContext = createContext();


export function PageTransition({children}){
    const [enabled, setEnabled] = useState(false);
    function open(){
        setEnabled(true)
    }
    function close(){
        setEnabled(false)
    }
    return <TransitionContext.Provider value={{open,close }}>
        <Transition enabled={enabled}></Transition>
        {children}
    </TransitionContext.Provider>
}


export function usePageTransition(){
    const {open, close} = useContext(TransitionContext)
    return {open,close};
}