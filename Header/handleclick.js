import React from "react";
import { Link } from "react-router-dom";

import Home from "../ClickComponent";
const Navbar = () => {
  return (
    <div>
      <Home />
      <header>
        <nav className="flex gap-6  cursor-pointer items-center justify-center">
          <ul>
            <Link to="home/">
              {" "}
              <li>Homess</li>
            </Link>
            <Link to="/about">
              {" "}
              <li>Abouts</li>
            </Link>
            <Link to="/contacts">
              {" "}
              <li>Contacts</li>
            </Link>
            <Link to="/Email">
              {" "}
              <li>Email</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
