import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { blogModel } from "../models/Blog";

function Post() {
  const { postId } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/posts/${postId}`);
        if (!res.ok) throw new Error("ec ec");
        const { data } = await res.json();
        // console.log(result);
        setBlog(data);
      } catch (e) {
        setError("Loi khi fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <>
      {loading ? (
        <p>Chờ xíu đi 3... Đang cướp dữ liệu!</p>
      ) : error ? (
        <p>Không cướp được, đi tù r {error}</p>
      ) : (
        <div className="box">
          {loading ? (
            "loading..."
          ) : (
            <>
              <h3 className="title">{blog.title}</h3>
              <p>{blog.content}</p>
            </>
          )}
        </div>
      )}{" "}
    </>
  );
}

export default Post;
