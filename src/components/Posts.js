import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from '../context/Authentication';

import "../style.css";

function Posts() {
  const { loggedIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [prevLocation, setPrevLocation] = useState("/");
  useEffect(() => {
    const prev = path.substring(0, path.lastIndexOf("/"));
    setPrevLocation(prev ? prev : "/");
    console.log(prev);
  }, [path]);
  
  if (loading) return null;
  
  if (!loggedIn)
    return (<Navigate to="/login" replace />)

  return (
    <div>
      <button onClick={() => navigate(`${prevLocation}`)}>&lt; Back</button>

      <Outlet />
    </div>
  );
}

export default Posts;
