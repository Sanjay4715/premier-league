import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../../Component/Navigation/Navigation";

const Home = () => {
  const [seasonName, setSeasonName] = useState();
  const [matches, setMatches] = useState();
  const [clubs, setClubs] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json"
      )
      .then((res) => {
        console.log(res.data.name);
        console.log(res.data.clubs);
        setClubs(res.data.clubs);
      })
      .catch((error) => console.log(error));
    axios
      .get(
        "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json"
      )
      .then((res) => {
        setSeasonName(res.data.name);
        setMatches(res.data.rounds);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Navigation page="home" />
      {/* <h1>{seasonName}</h1>
      {clubs && clubs.map((club, index) => <li key={index}>{club.name}</li>)} */}
    </div>
  );
};

export default Home;
