import React from "react";
import { Link } from "react-router-dom";
import "../style.css";


function NavBar({loggedIn, onLogout}) {
  // console.log(loggedIn)

  console.log('login status: ', loggedIn,' --- from nav-bar');
  
  const handleLogout = () => {
    onLogout(null);
  }

  return (
    <div className="nav-bar">
      <span id="nav-logo">Blog Web</span>
      <Link className="btn-link" to={`/create`}>
        Create
      </Link>
      <Link className="btn-link" to={`/`}>
        Home
      </Link>
      <Link className="btn-link" to={`/posts`}>
        Posts
      </Link>
  
      <Link className="btn-link" to={`/about`}>
        About
      </Link>
      <Link className="btn-link" to={loggedIn ? `/` : `/login`} onClick={loggedIn&&handleLogout}>
        {loggedIn ? "Logout" : "Login"}
      </Link>
    </div>
  );
}

export default NavBar;
