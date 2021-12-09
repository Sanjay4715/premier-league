import React, { useEffect, useState } from "react";

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
        console.log(res.data.rounds);
        setMatches(res.data.rounds);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navigation page="results" />
      <div style={{ padding: 20 }}></div>
    </div>
  );
};

export default Home;
