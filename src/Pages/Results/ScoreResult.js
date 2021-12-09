import React from "react";
import styled from "@emotion/styled";
import moment from "moment";

import { clubs } from "../../Assets/Data/clubs";
import { getClubDetails } from "../../Component/GetClubDetails/GetClubDetails";

const StyledTeam = styled.div({
  color: "#37003c",
  fontFamily: "Gilroy-bold",
  fontSize: 18,
  marginRight: 10,
});

const StyledScore = styled.div({
  border: `2px solid #37003c`,
  backgroundColor: "#37003c",
  width: 30,
  color: "#fff",
  textAlign: "center",
  fontFamily: "Gilroy-bold",
  fontSize: 15,
  marginRight: 10,
});

const ScoreResult = ({ data }) => {
  return (
    <div>
      <h2 style={{ fontFamily: "Gilroy-bold" }}>
        {moment(data.date).format("MMMM Do YYYY")}
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: `1px solid #eee`,
          padding: 10,
          fontSize: 16,
        }}
      >
        <StyledTeam>{data.team1}</StyledTeam>
        <div style={{ marginRight: 10 }}>{getClubDetails(data.team1).logo}</div>
        <StyledScore>{data.score.ft[0]}</StyledScore>
        <StyledScore>{data.score.ft[1]}</StyledScore>
        <div style={{ marginRight: 10 }}>{getClubDetails(data.team2).logo}</div>
        <StyledTeam>{data.team2}</StyledTeam>
      </div>
    </div>
  );
};

export default ScoreResult;
