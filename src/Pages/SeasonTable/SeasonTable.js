import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import CustomSelect from "../../Component/CustomSelect/CustomSelect";
import CustomTable from "./CustomTable";
import Navigation from "../../Component/Navigation/Navigation";

const SeasonTable = () => {
  const [completeMatches, setCompleteMatches] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [pointsOrder, setPointsOrder] = useState("Descending");
  const [asecendingSource, setAscendingSource] = useState([]);

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

  const handleOrderPoints = (value) => {
    setPointsOrder(value);
    if (value === "Ascending") {
      setAscendingSource(dataSource.sort(compareAscendingPoints));
    } else {
      setDataSource(dataSource.sort(compareDescendingPoints));
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

  return (
    <div>
      <Navigation page="table" />
      <div style={{ padding: 20 }}>
        <div>
          <div>Sorting By Points</div>
          <CustomSelect
            value={pointsOrder}
            options={[{ name: "Ascending" }, { name: "Descending" }]}
            setData={handleOrderPoints}
            placeholder="Select Match Day"
            style={{ width: 250 }}
          />
        </div>
        <CustomTable
          columns={columns}
          dataSource={
            pointsOrder === "Ascending" ? asecendingSource : dataSource
          }
          pointsOrder={pointsOrder}
          completeMatches={completeMatches}
        />
      </div>
    </div>
  );
};

export default SeasonTable;
