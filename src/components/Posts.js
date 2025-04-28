import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation} from "react-router-dom";

import "../style.css";

function Posts() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [prevLocation, setPrevLocation] = useState("/");
  useEffect(() => {
    const prev = path.substring(0, path.lastIndexOf("/"));
    setPrevLocation(prev ? prev : "/");
    console.log(prev);
  }, [path]);

  return (
    <div>
      <button onClick={() => navigate(`${prevLocation}`)}>&lt; Back</button>

      <Outlet />
    </div>
  );
}

export default Posts;
