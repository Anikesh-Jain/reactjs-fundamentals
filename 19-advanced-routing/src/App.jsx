import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Men from "./pages/men";
import Women from "./pages/women";
import Kids from "./pages/kids";
import Courses from "./pages/Courses";
import CoursesDetails from "./pages/CoursesDetails";
import Navbar2 from "./components/navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CoursesDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
          <Route path="/product/kids" element={<Kids />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
