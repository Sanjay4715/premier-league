import React, { useEffect, useState } from "react";
import moment from "moment";

import axios from "axios";
import Navigation from "../../Component/Navigation/Navigation";

const Home = () => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
      )
      .then((res) => {
        setMatches(res.data.rounds);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navigation page="results" />
      <div style={{ padding: 20 }}>
        {matches &&
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
          })}
      </div>
    </div>
  );
};

export default Home;
