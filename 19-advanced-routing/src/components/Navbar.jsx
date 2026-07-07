import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-gray-800 text-white">
      <h2 className=" text-2xl font-bold">Anikesh</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium" to="/contact">
          Contact
        </Link>
        <Link className="text-lg font-medium" to="/product">
          Product
        </Link>
        <Link className="text-lg font-medium" to="/courses">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
