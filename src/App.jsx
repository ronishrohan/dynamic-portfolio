import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import Header from "./components/Header";
import Contact from "./pages/contact/page";
import Work from "./pages/work/page";
import { PageTransition } from "./hooks/usePageTransition";
import { AnimatePresence } from "framer-motion";
import {useLocation} from "react-router-dom"

function App() {
  const location = useLocation()
  return (
    <>
      <PageTransition>
        <Header></Header>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/work" element={<Work />}></Route>
          </Routes>
        </AnimatePresence>
      </PageTransition>
    </>
  );
}

export default App;
