import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Home from "../Pages/Home/Home";
import Table from "../Pages/Table/Table";
import Results from "../Pages/Results/Results";

const RoutingIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/table" element={<Table />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutingIndex;
