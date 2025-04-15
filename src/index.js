import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostList from "./components/PostList";

import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <AuthProvider> */}
    <Router>
      <div id="top-bar">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostList />} />
        </Route>
      </Routes>
    </Router>
    {/* </AuthProvider> */}
  </StrictMode>
);
