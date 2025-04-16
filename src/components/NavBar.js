import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/Authentication';
import "../style.css";


function NavBar() {

  const { user, loggedIn, logout } = useContext(AuthContext);
  // console.log(loggedIn)

  const handleLogout = () => {
    logout();
  }

  console.log(loggedIn ? 'logged in, user: ' + user.name : 'not loggedin',' --- from nav-bar');

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
      <Link className="btn-link" to={loggedIn ? `/` : `/login`} onClick={loggedIn&&handleLogout}>
        {loggedIn ? "Logout" : "Login"}
      </Link>
    </div>
  );
}

export default NavBar;
