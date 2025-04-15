import React, { useState, useEffect, useContext, Navigate } from "react";
import { useParams } from "react-router-dom";

import { blogModel } from "../models/Blog";
import { AuthContext } from '../context/Authentication';


function Post() {
    const { postId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const res = blogModel(postId);
        setBlog(res);
        setLoading(false);
    }, [postId]);

    const {loggedIn} = useContext(AuthContext);
    if (!loggedIn)
        return (<Navigate to="/login" replace />)

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