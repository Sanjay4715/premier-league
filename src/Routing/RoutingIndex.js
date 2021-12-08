import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const RoutingIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutingIndex;
