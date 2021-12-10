import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Select } from "antd";

import Navigation from "../../Component/Navigation/Navigation";
import CustomSelect from "../../Component/CustomSelect/CustomSelect";
import ScoreResult from "./ScoreResult";

const { Option } = Select;

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [matchDay, setMatchDay] = useState();
  const [filterMatches, setFilterMatches] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("season"));
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/football.json/master/2018-19/en.1.json"
      )
      .then((res) => {
        let resultData = [];
        if (res.data.rounds) {
          resultData = res.data.rounds && res.data.rounds;
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
          resultData = [...finalMatchArr];
        }
        setMatches(resultData);
        let currentMatchDay = resultData[resultData.length - 1].name;
        setMatchDay(currentMatchDay);
        setFilterMatches(
          resultData.find((data) => data.name === currentMatchDay).matches
        );
      })
      .catch((error) => console.log(error));
  }, []);

  const handleMatchDay = (value) => {
    setMatchDay(value);
    setFilterMatches(matches.find((data) => data.name === value).matches);
  };

  return (
    <div>
      <Navigation page="results" />
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ fontSize: 18, fontFamily: "Gilroy-bold", marginRight: 10 }}
          >
            Match Day
          </div>
          <CustomSelect
            value={matchDay}
            options={matches && matches}
            setData={handleMatchDay}
            placeholder="Select Match Day"
            style={{ width: 250 }}
          />
        </div>
        <h1>{matchDay}</h1>
        {filterMatches.length !== 0 &&
          filterMatches.map((data, index) => (
            <ScoreResult key={index} data={data} />
          ))}
      </div>
    </div>
  );
};

export default Home;
