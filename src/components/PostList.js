import React from "react";
import { useNavigate, Outlet} from "react-router-dom";

import { useBlog } from "../models/Blog.js";

function PostList() {
  const navigate = useNavigate();
  const blog_list = useBlog();
  
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
