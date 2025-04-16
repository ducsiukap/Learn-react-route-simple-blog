import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Login from "./components/Login";
import { AuthProvider } from "./context/Authentication";

import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <div id="top-bar">
          <NavBar />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostList />} />
            <Route path=":postId" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);
