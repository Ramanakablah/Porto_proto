import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="w-full bg-navgray">
      <nav className="common-side-padding flex items-center h-20">
        <div className="logoname">
          <Link to='/'>R.</Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-8">
          <Link to="/">
            <button className="border rounded-full cursor-pointer py-1 px-3 hover:bg-lightgray">
              Work
            </button>
          </Link>
          <Link to="/learning">
            <button className="border rounded-full cursor-pointer py-1 px-3 hover:bg-lightgray">
              Learnings
            </button>
          </Link>
          <Link to="/resume">
            <button className="border rounded-full cursor-pointer py-1 px-3 hover:bg-lightgray">
              Resume
            </button>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
