import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Row, Col, Skeleton } from "antd";

import Navigation from "../../Component/Navigation/Navigation";
import { clubs } from "../../Assets/Data/clubs";
import Stadium from "../../Assets/Logo/stadium.png";
import Link from "../../Assets/Logo/Link.png";
import CustomCard from "../../Component/CustomCard/CustomCard";
import SeasonSelect from "../../Component/SeasonSelect/SeasonSelect";

const columns = [
  {
    title: "Club Name",
    render: (record) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: 10 }}>{record.logo}</div>
        <div
          style={{
            fontSize: 16,
            fontFamily: "Gilroy-bold",
          }}
        >
          {record.name}
        </div>
      </div>
    ),
  },
  {
    title: "Stadium",
    dataIndex: "stadium",
    key: "stadium",
    render: (stadium) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginRight: 10,
          }}
        >
          <img src={Stadium} alt="Stadium" style={{ width: 50 }} />
        </div>
        <div style={{ fontFamily: "Gilroy-bold", fontSize: 14 }}>{stadium}</div>
      </div>
    ),
  },
  {
    title: "Visit",
    dataIndex: "siteUrl",
    key: "siteUrl",
    render: (siteUrl) => (
      <a href={siteUrl}>
        <img src={Link} alt="Link" style={{ width: 30, height: 30 }} />
      </a>
    ),
  },
];

const Home = () => {
  const year = new Date().getFullYear();
  const [season, setSeason] = useState(
    year - 1 + "-" + year.toString().slice(-2)
  );
  const [seasonClubs, setSeasonClubs] = useState();

  useEffect(() => {
    getClubs(season);
  }, []);

  const getClubs = (season) => {
    axios
      .get(
        `https://raw.githubusercontent.com/openfootball/football.json/master/${season}/en.1.clubs.json`
      )
      .then((res) => {
        const result = clubs.filter((data) =>
          res.data.clubs.some(
            (data2) => data.name === data2.name.replace(" FC", "")
          )
        );
        setSeasonClubs(result);
      })
      .catch((error) => console.log(error));
  };

  const handleSeason = (value) => {
    setSeason(value);
    getClubs(value);
  };

  return (
    <div>
      <Navigation page="home" />
      <div style={{ padding: 10 }}>
        <h1>Season {season}</h1>
        <div style={{ marginBottom: 20 }}>
          <SeasonSelect seasonValue={season} setSeason={handleSeason} />
        </div>
        <Row gutter={[16, 16]}>
          {seasonClubs &&
            seasonClubs.map((data, index) => (
              <Col span={4} key={index}>
                <Skeleton loading={!data} active>
                  <CustomCard data={data} />
                </Skeleton>
              </Col>
            ))}
        </Row>
        <h1>All Time Club</h1>
        <Table
          rowKey="name"
          columns={columns}
          dataSource={clubs}
          rowClassName={() => "editable-row"}
        />
      </div>
    </div>
  );
};

export default Home;
