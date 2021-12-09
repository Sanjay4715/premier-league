import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
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
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
      )
      .then((res) => {
        setMatches(res.data.rounds);
        let currentMatchDay = res.data.rounds[res.data.rounds.length - 1].name;
        setMatchDay(currentMatchDay);
        setFilterMatches(
          res.data.rounds.find((data) => data.name === currentMatchDay).matches
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
        <div>
          <div style={{ fontSize: 16, fontFamily: "Gilroy-bold" }}>
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

        {/* {matches &&
          matches.map((match, index) => {
            return (
              <div key={index}>
                <div>{match.name}</div>
                {match.matches.map((data, index) => (
                  <div key={index}>
                    <div>{moment(data.date).format("MMMM Do YYYY")}</div>
                  </div>
                ))}
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default Home;
