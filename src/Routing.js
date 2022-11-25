import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/*" element={<App />} />
      <Route exact path="/SignIn" element={<SignIn />} />
      <Route exact path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default Routing;
