import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import Header from "./components/Header";
import Contact from "./pages/contact/page";
import Work from "./pages/work/page";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </>
  );
}

export default App;
