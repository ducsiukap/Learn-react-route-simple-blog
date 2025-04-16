import React, { useContext } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { AuthContext } from '../context/Authentication';

import { useBlog } from "../models/Blog.js";

function PostList() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const blog_list = useBlog();
  if (!loggedIn)
    return (<Navigate to="/login" replace />)
  
  return (
    <div>
      {blog_list.map((item) => (
        <div className="box" key={item._id} onClick={() => { navigate(`/posts/${item._id}`) }}>
          <h3 className="title">{item.title}</h3>

          <Outlet />
        </div>
      ))}
    </div>
  );
}


export default PostList;
