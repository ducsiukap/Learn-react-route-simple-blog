import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="box">
        <h1 className="title">Hello World!</h1>
        <span className="explain">from Home</span>
        <br />
      </div>
      <button onClick={() => navigate("/posts")}>See all posts</button>
    </div>
  );
}

export default Home;
