import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Input } from "antd";
import styled from "@emotion/styled";

import CustomSelect from "../../Component/CustomSelect/CustomSelect";
import CustomTable from "./CustomTable";
import Navigation from "../../Component/Navigation/Navigation";

const StyledInput = styled(Input)({
  width: 300,
  fontFamily: "Gilroy",
  color: "#37003c",
  border: `1px solid #37003c`,
  fontWeight: "bold",
  ":hover": {
    border: `1px solid #37003c`,
  },
});

const SeasonTable = () => {
  const [completeMatches, setCompleteMatches] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [pointsOrder, setPointsOrder] = useState("Descending");
  const [filterTeam, setFilterTeam] = useState("");
  const [asecendingSource, setAscendingSource] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const columns = [
    {
      columnName: "Rank",
      width: 20,
    },
    {
      columnName: "Club Name",
      width: 150,
    },
    {
      columnName: "Played",
      width: 70,
    },
    {
      columnName: "Points",
      width: 70,
    },
    {
      columnName: "Won",
      width: 70,
    },
    {
      columnName: "Lost",
      width: 70,
    },
    {
      columnName: "Draw",
      width: 70,
    },
    {
      columnName: "GF",
      width: 70,
    },
    {
      columnName: "GA",
      width: 70,
    },
    {
      columnName: "GD",
      width: 70,
    },
    {
      columnName: "Form",
      width: 200,
    },
  ];

  useEffect(() => {
    let clubs = [];
    let matches = [];
    axios
      .get(
        `https://raw.githubusercontent.com/openfootball/football.json/master/2018-19/en.1.clubs.json`
      )
      .then((res) => {
        clubs = [...res.data.clubs];
      })
      .catch((error) => console.log(error));
    axios
      .get(
        `https://raw.githubusercontent.com/openfootball/football.json/master/2018-19/en.1.json`
      )
      .then((res) => {
        let finalMatchesArr = [];
        if (res.data.rounds) {
          finalMatchesArr = [...res.data.rounds];
        }
        if (res.data.matches) {
          const uniqueMatchday = [];
          res.data.matches.filter((match) => {
            const isDuplicate = uniqueMatchday.includes(match.round);
            if (!isDuplicate) {
              uniqueMatchday.push(match.round);
              return true;
            }
          });
          let finalMatchArr = [];
          for (let i = 0; i < uniqueMatchday.length; i++) {
            let matches = [];
            for (let j = 0; j < res.data.matches.length; j++) {
              if (uniqueMatchday[i] === res.data.matches[j].round) {
                let matchesObj = {
                  date: res.data.matches[j].date,
                  team1: res.data.matches[j].team1,
                  team2: res.data.matches[j].team2,
                  score: res.data.matches[j].score,
                };
                matches.push(matchesObj);
              }
            }
            finalMatchArr.push({ name: uniqueMatchday[i], matches });
          }
          finalMatchesArr = [...finalMatchArr];
        }
        matches = [...finalMatchesArr];
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
    setFilterData(dataArr);
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

  const handleOrderPoints = (value) => {
    setPointsOrder(value);
    if (value === "Ascending") {
      setAscendingSource(dataSource.sort(compareAscendingPoints));
      setFilterData(filterData.sort(compareAscendingPoints));
    } else {
      setDataSource(dataSource.sort(compareDescendingPoints));
      setFilterData(filterData.sort(compareDescendingPoints));
    }
  };

  const compareAscendingPoints = (a, b) => {
    const pointA = a.points;
    const pointB = b.points;

    let comparison = 0;
    if (pointA > pointB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  };

  const compareDescendingPoints = (a, b) => {
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

  const handleFilterTeam = (e) => {
    setFilterTeam(e.target.value);
    let data = pointsOrder === "Descending" ? dataSource : asecendingSource;
    setFilterData(
      data.filter(
        (data) =>
          data.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      )
    );
  };

  return (
    <div>
      <Navigation page="table" />
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 20 }}>
            <div style={{ marginRight: 10 }}>Sorting By Points</div>
            <CustomSelect
              value={pointsOrder}
              options={[{ name: "Ascending" }, { name: "Descending" }]}
              setData={handleOrderPoints}
              placeholder="Select Match Day"
              style={{ width: 250 }}
            />
          </div>
          <div>
            <div style={{ marginRight: 10 }}>Search By Team Name</div>
            <StyledInput
              name="filterTeam"
              value={filterTeam}
              placeholder="Enter Team Name"
              onChange={handleFilterTeam}
            />
          </div>
        </div>

        <CustomTable
          columns={columns}
          dataSource={filterData}
          pointsOrder={pointsOrder}
          completeMatches={completeMatches}
          filterTeam={filterTeam}
        />
      </div>
    </div>
  );
};

export default SeasonTable;
