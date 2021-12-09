import React, { useEffect, useState } from "react";
import Navigation from "../../Component/Navigation/Navigation";
import { Table } from "antd";
import styled from "@emotion/styled";
import axios from "axios";
import moment from "moment";

const StyledTable = styled(Table)({
  ".green": { backgroundColor: "#66b266" },
  ".red": { backgroundColor: "#ff3333" },
  ".ant-table-tbody>tr.ant-table-row-level-0:hover>td": {
    background: "unset",
  },
});

const StyledColumnTitle = styled.b({
  fontFamily: "Gilroy-bold",
  color: "#37003c",
});

const StyledForm = styled.div({
  width: 30,
  height: 30,
  borderRadius: "50%",
  padding: 10,
  color: "#fff",
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 5,
  "&.win": {
    backgroundColor: "green",
  },
  "&.lose": {
    backgroundColor: "red",
  },
  "&.draw": {
    backgroundColor: "grey",
  },
});

const SeasonTable = () => {
  const [completeMatches, setCompleteMatches] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: <StyledColumnTitle>Rank</StyledColumnTitle>,
      width: 100,
      render: (item, record, index) => <>{index + 1}</>,
    },
    {
      title: <StyledColumnTitle>Club Name</StyledColumnTitle>,
      dataIndex: "name",
    },
    {
      title: <StyledColumnTitle>Played</StyledColumnTitle>,
      width: 100,
      dataIndex: "matchPlayed",
    },
    {
      title: <StyledColumnTitle>Points</StyledColumnTitle>,
      width: 100,
      dataIndex: "points",
    },
    {
      title: <StyledColumnTitle>Won</StyledColumnTitle>,
      width: 100,
      dataIndex: "won",
    },
    {
      title: <StyledColumnTitle>Drawn</StyledColumnTitle>,
      width: 100,
      dataIndex: "drawn",
    },
    {
      title: <StyledColumnTitle>Lost</StyledColumnTitle>,
      width: 100,
      dataIndex: "lost",
    },
    {
      title: <StyledColumnTitle>GF</StyledColumnTitle>,
      width: 100,
      dataIndex: "gf",
    },
    {
      title: <StyledColumnTitle>GA</StyledColumnTitle>,
      width: 100,
      dataIndex: "ga",
    },
    {
      title: <StyledColumnTitle>GD</StyledColumnTitle>,
      width: 100,
      dataIndex: "gd",
    },
    {
      title: <StyledColumnTitle>Form</StyledColumnTitle>,
      width: 200,
      render: (record) => {
        return (
          <div style={{ display: "flex" }}>
            {record.form.length !== 0 &&
              record.form.map((data, index) => (
                <React.Fragment key={index}>
                  {data === "Win" ? (
                    <StyledForm className="win">W</StyledForm>
                  ) : data === "Lose" ? (
                    <StyledForm className="lose">L</StyledForm>
                  ) : (
                    <StyledForm className="draw">D</StyledForm>
                  )}
                </React.Fragment>
              ))}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    let clubs = [];
    let matches = [];
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.clubs.json"
      )
      .then((res) => {
        clubs = [...res.data.clubs];
      })
      .catch((error) => console.log(error));
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json"
      )
      .then((res) => {
        matches = [...res.data.rounds];
        renderClubMatches(clubs, matches);
      })
      .catch((error) => console.log(error));
  }, []);

  const renderClubMatches = (clubs, matches) => {
    let finalArr = [];
    for (let i = 0; i < clubs.length; i++) {
      let tempObj = { name: clubs[i].name, code: clubs[i].code };
      let totalMatches = [];
      for (let j = 0; j < matches.length; j++) {
        for (let k = 0; k < matches[j].matches.length; k++) {
          if (clubs[i].name === matches[j].matches[k].team1) {
            let tempMatchObj = {
              matchDay: matches[j].name,
              matchDate: matches[j].matches[k].date,
              opponent: matches[j].matches[k].team2,
              score: matches[j].matches[k].score.ft,
            };
            totalMatches.push(tempMatchObj);
          }
        }
      }
      let finalObj = { ...tempObj, totalMatches };
      finalArr.push(finalObj);
    }
    setCompleteMatches(finalArr);
    calculateStat(finalArr);
  };

  const calculateStat = (clubs) => {
    let dataArr = [];
    for (let i = 0; i < clubs.length; i++) {
      let dataObj = {
        name: clubs[i].name,
        code: clubs[i].code,
        matchPlayed: clubs[i].totalMatches.length,
      };
      let points = 0;
      let won = 0;
      let lost = 0;
      let drawn = 0;
      let gf = 0;
      let ga = 0;
      let form = [];
      clubs[i].totalMatches.sort(compare);
      let counter = 0;
      for (let j = 0; j < clubs[i].totalMatches.length; j++) {
        let result = checkWin(
          clubs[i].totalMatches[j].score[0],
          clubs[i].totalMatches[j].score[1]
        );
        if (counter <= 4) {
          form.push(result);
          counter++;
        }
        if (result === "Win") {
          won = won + 1;
          points = points + 3;
        } else if (result === "Lose") {
          points = points;
          lost = lost + 1;
        } else {
          points = points + 1;
          drawn = drawn + 1;
        }
        gf = gf + clubs[i].totalMatches[j].score[0];
        ga = ga + clubs[i].totalMatches[j].score[1];
      }
      dataObj = {
        ...dataObj,
        points: points,
        won: won,
        lost: lost,
        drawn: drawn,
        gf: gf,
        ga: ga,
        gd: gf - ga,
        form: form,
      };
      dataArr.push(dataObj);
    }
    dataArr.sort(compareRank);
    setDataSource(dataArr);
  };

  const compareRank = (a, b) => {
    const pointA = a.points;
    const pointB = b.points;

    let comparison = 0;
    if (pointA < pointB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  };

  const compare = (a, b) => {
    const dateA = a.matchDate;
    const dateB = b.matchDate;

    let comparison = 0;
    if (moment(dateA).isBefore(moment(dateB))) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  };

  const checkWin = (score1, score2) => {
    if (score1 > score2) {
      return "Win";
    } else if (score1 < score2) {
      return "Lose";
    } else {
      return "Draw";
    }
  };

  return (
    <div>
      <Navigation page="table" />
      <div style={{ padding: 20 }}>
        <StyledTable
          dataSource={dataSource}
          rowKey="name"
          columns={columns}
          pagination={false}
          rowClassName={(item, record, index) =>
            record < 4 ? "green" : record > dataSource.length - 4 && "red"
          }
        />
      </div>
    </div>
  );
};

export default SeasonTable;
