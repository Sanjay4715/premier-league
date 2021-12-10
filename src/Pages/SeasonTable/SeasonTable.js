import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Input, Skeleton } from "antd";
import styled from "@emotion/styled";

import CustomSelect from "../../Component/CustomSelect/CustomSelect";
import CustomTable from "./CustomTable";
import Navigation from "../../Component/Navigation/Navigation";
import SeasonSelect from "../../Component/SeasonSelect/SeasonSelect";

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
  const year = new Date().getFullYear();
  const [season, setSeason] = useState(
    year - 1 + "-" + year.toString().slice(-2)
  );
  const [completeMatches, setCompleteMatches] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [pointsOrder, setPointsOrder] = useState("Descending");
  const [filterTeam, setFilterTeam] = useState("");
  const [asecendingSource, setAscendingSource] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [errorStatus, setErrorStatus] = useState("");

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
    getTableMatches(season);
  }, [season]);

  const getTableMatches = (season) => {
    let clubs = [];
    let matches = [];
    axios
      .get(
        `https://raw.githubusercontent.com/openfootball/football.json/master/${season}/en.1.clubs.json`
      )
      .then((res) => {
        clubs = [...res.data.clubs];
      })
      .catch((error) => console.log(error));
    axios
      .get(
        `https://raw.githubusercontent.com/openfootball/football.json/master/${season}/en.1.json`
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
        setErrorStatus("");
        renderClubMatches(clubs, matches);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.clear();
          setErrorStatus("Not Found");
        }
      });
  };

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
              score:
                matches[j].matches[k].score !== undefined
                  ? matches[j].matches[k].score.ft
                  : "To Be Played",
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
      let playedMatches =
        clubs[i].totalMatches &&
        clubs[i].totalMatches.filter((data) => data.score !== "To Be Played");
      let dataObj = {
        name: clubs[i].name,
        code: clubs[i].code,
        matchPlayed: playedMatches.length,
      };
      let points = 0;
      let won = 0;
      let lost = 0;
      let drawn = 0;
      let gf = 0;
      let ga = 0;
      let form = [];
      playedMatches.sort(compare);
      let counter = 0;
      for (let j = 0; j < playedMatches.length; j++) {
        let result = checkWin(
          playedMatches[j].score[0],
          playedMatches[j].score[1]
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
        gf = gf + playedMatches[j].score[0];
        ga = ga + playedMatches[j].score[1];
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

  const handleSeason = (value) => {
    setSeason(value);
    setFilterTeam("");
    getTableMatches(value);
  };

  return (
    <div>
      <Navigation page="table" />
      <div style={{ padding: `10px 30px 10px 30px` }}>
        <h1>Season {season}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 20 }}>
            <SeasonSelect seasonValue={season} setSeason={handleSeason} />
          </div>
          {!errorStatus && (
            <div style={{ marginRight: 20 }}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "Gilroy",
                }}
              >
                Sorting By Points
              </div>
              <CustomSelect
                value={pointsOrder}
                options={[{ name: "Ascending" }, { name: "Descending" }]}
                setData={handleOrderPoints}
                placeholder="Select Match Day"
                style={{ width: 250 }}
              />
            </div>
          )}

          {!errorStatus && (
            <div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fontFamily: "Gilroy",
                }}
              >
                Search By Team Name
              </div>
              <StyledInput
                name="filterTeam"
                value={filterTeam}
                placeholder="Enter Team Name"
                onChange={handleFilterTeam}
              />
            </div>
          )}
        </div>
        {errorStatus ? (
          <div style={{ fontSize: 30, textAlign: "center" }}>
            Data Not Available
          </div>
        ) : (
          <Skeleton loading={!filterData} active>
            <CustomTable
              columns={columns}
              dataSource={filterData}
              pointsOrder={pointsOrder}
              completeMatches={completeMatches}
              filterTeam={filterTeam}
            />
          </Skeleton>
        )}
      </div>
    </div>
  );
};

export default SeasonTable;
