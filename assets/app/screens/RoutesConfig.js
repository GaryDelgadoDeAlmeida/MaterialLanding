import React from "react";
import { Route, Routes } from "react-router-dom";

// User
import Home from "./user/Home";

// Admin

export default function RoutesConfig() {

  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"*"} element={<Home />} />
    </Routes>
  )
}