import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Login from "./components/Login";
import NewPost from "./components/NewPost";
// import RegisterForm from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

import "./style.css";
import { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => { setLoggedIn(!!user) }, [user]); 
    console.log(user, loggedIn);

    return (
        <Router>
            <div id="top-bar">
                <NavBar loggedIn={loggedIn} onLogout={setUser} />
            </div>
            <Routes>
                <Route path="/login" element={<Login loggedIn={loggedIn} onLogin={setUser} />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About loggedIn={loggedIn} user={user}/>} />
                <Route path="/posts" element={<ProtectedRoute loggedIn={loggedIn}><Posts /></ProtectedRoute>}>
                    <Route index element={<PostList />} />
                    <Route path=":postId" element={<Post />} />
                </Route>
                <Route path="/create" element={<ProtectedRoute loggedIn={loggedIn}><NewPost /></ProtectedRoute>} />
            </Routes>
        </Router>
    )
}

export default App;