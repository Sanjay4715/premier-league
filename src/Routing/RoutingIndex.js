import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Home from "../Pages/Home/Home";
import Results from "../Pages/Results/Results";
import SeasonTable from "../Pages/SeasonTable/SeasonTable";

const RoutingIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/results/:club" element={<Results />} />
      <Route path="/table" element={<SeasonTable />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutingIndex;
