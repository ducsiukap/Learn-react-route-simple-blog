import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/Authentication';
import "../style.css";


function NavBar() {

  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn)

  return (
    <div className="nav-bar">
      <span id="nav-logo">Blog Web</span>
      <Link className="btn-link" to={`/`}>
        Home
      </Link>
      <Link className="btn-link" to={`/posts`}>
        Posts
      </Link>
      <Link className="btn-link" to={`/about`}>
        About
      </Link>
      <Link className="btn-link" to={`/login`}>
        {loggedIn ? "Logout" : "Login"}
      </Link>
    </div>
  );
}

export default NavBar;
