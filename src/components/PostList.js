import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

// import { useBlog } from "../models/Blog.js";

function PostList() {
  const navigate = useNavigate();
  // const blog_list = useBlog();
  const [blog_list, setBlog_list] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/posts");
        if (!res.ok) {
          throw new Error("Lỗi khi fetch data");
        }
        console.log(res);
        const list = await res.json();
        // console.log(list);
        setBlog_list(list.data);
      } catch (e) {
        setError("Loi khi fetch data");
        // console.log(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Chờ tý, đang load...</p>
      ) : error ? (
        <p>Backend có lỗi rồi kìa cha. {error}</p>
      ) : (
        blog_list.map((item) => (
          <div
            className="box"
            key={item._id}
            onClick={() => {
              navigate(`/posts/${item._id}`);
            }}
          >
            <h3 className="title">{item.title}</h3>

            <Outlet />
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
