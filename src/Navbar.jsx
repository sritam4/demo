import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const style = {
    display: "flex",
    gap: "50px",
  };
  return (
    <ul style={style}>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
    </ul>
  );
};

export default Navbar;
