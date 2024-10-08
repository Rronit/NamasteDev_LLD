import React from "react";
import { ShimmerUI } from "./components/ShimmerUI/ShimmerUI";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/About";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Accordion from "./components/Accordion/Accordion";
import { NestedComments } from "./components/NestedComments/NestedComments";
import ImagerSlider from "./components/ImagerSlider";

function App() {
  return (
    <div>
      <header
        style={{
          background: "black",
          fontSize: 20,
          color: "#fff",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        Hello World
      </header>
      <div
        style={{
          display: "flex",
          background: "grey"
        }}
      >
        <a style={{ padding: 10 }} href="/">
          Home
        </a>
        <a style={{ padding: 10 }} href="/accordion">
          Accordion
        </a>
        <a style={{ padding: 10 }} href="/comments">
          Nested Comments
        </a>
        <a style={{ padding: 10 }} href="/slider">
          Image Slider
        </a>
        <a style={{ padding: 10 }} href="/about">
          About
        </a>
        <a style={{ padding: 10 }} href="/profile">
          Profile
        </a>
        <a style={{ padding: 10 }} href="/login">
          Login
        </a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShimmerUI />}>
            {" "}
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/comments" element={<NestedComments />}></Route>
          <Route path="/slider" element={<ImagerSlider />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ShimmerUI />; */}
    </div>
  );
}

export default App;
