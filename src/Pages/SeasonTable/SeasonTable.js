import React, { useEffect, useState } from "react";
import Navigation from "../../Component/Navigation/Navigation";
import { Table } from "antd";

const columns = [
  { title: "Rank", width: 100 },
  {
    title: "Club Name",
  },
  {
    title: "Played",
    width: 100,
  },
  {
    title: "Won",
    width: 100,
  },
  {
    title: "Drawn",
    width: 100,
  },
  {
    title: "Lose",
    width: 100,
  },
  {
    title: "GF",
    width: 100,
  },
  {
    title: "GA",
    width: 100,
  },
  {
    title: "GD",
    width: 100,
  },
  {
    title: "Form",
    width: 200,
  },
];

const SeasonTable = () => {
  return (
    <div>
      <Navigation page="table" />
      <div style={{ padding: 20 }}>
        <Table columns={columns} rowClassName={() => "editable-row"} />
      </div>
    </div>
  );
};

export default SeasonTable;
