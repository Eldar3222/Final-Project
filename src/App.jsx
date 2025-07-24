import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./componnents/Header"; 
import Footer from "./componnents/commons/Footer"; 

import Mainpage from "./pages/Mainpage";
import Courselist from "./pages/Courselist";
import BlogGrid from "./pages/BlogGrid";
import AboutUs from "./pages/AboutUs";
import Conactus from "./pages/Conactus"; 
import LiveClass from "./pages/LiveClass";
import BecomeTeacher from "./pages/BecomeTeacher";
import Myprofile from "./pages/Myprofile";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} /> {}
        <Route path="/pages/Courselist" element={<Courselist />} />
        <Route path="/pages/BlogGrid" element={<BlogGrid />} />
        <Route path="/pages/AboutUs" element={<AboutUs />} />
        <Route path="/pages/Conactus" element={<Conactus />} />
        <Route path="/pages/LiveClass" element={<LiveClass />} />
        <Route path="/pages/BecomeTeacher" element={<BecomeTeacher />} />
        <Route path="/pages/Myprofile" element={<Myprofile />} />
      </Routes>
      <Footer />
    </>
  );
}