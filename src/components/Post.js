import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { blogModel } from "../models/Blog";


function Post() {
    const { postId } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const res = blogModel(postId);
        setBlog(res);
        setLoading(false);
    }, [postId]);

    return (
        <div className="box">
            {loading ? "loading..." : <>
                <h3 className="title">{blog.title}</h3>
                <p>{blog.content}</p>
            </>
        }
        </div>
    );
}

export default Post;