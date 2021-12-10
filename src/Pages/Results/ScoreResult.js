import React from "react";
import styled from "@emotion/styled";
import moment from "moment";

import { clubs } from "../../Assets/Data/clubs";
import { getClubDetails } from "../../Component/GetClubDetails/GetClubDetails";
import { Divider } from "antd";

const StyledTeam = styled.div({
  color: "#37003c",
  fontFamily: "Gilroy-bold",
  fontSize: 18,
  marginRight: 10,
  width: "30%",
});

const StyledScore = styled.div({
  border: `2px solid #37003c`,
  backgroundColor: "#37003c",
  width: 40,
  height: 40,
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Gilroy-bold",
  fontSize: 15,
  marginRight: 20,
});

const ScoreResult = ({ data }) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <div
          style={{
            fontFamily: "Gilroy-bold",
            fontSize: 18,
            width: "30%",
          }}
        >
          {moment(data.date).format("MMMM Do YYYY")}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 16,
            width: "70%",
          }}
        >
          <StyledTeam>{data.team1}</StyledTeam>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 20 }}>
              {getClubDetails(data.team1).logo}
            </div>
            {data.score ? (
              <div style={{ display: "flex" }}>
                <StyledScore>{data.score.ft[0]}</StyledScore>
                <StyledScore>{data.score.ft[1]}</StyledScore>
              </div>
            ) : (
              <div style={{ marginRight: 20, fontFamily: "Gilroy-bold" }}>
                To Be Played
              </div>
            )}
            <div style={{ marginRight: 20 }}>
              {getClubDetails(data.team2).logo}
            </div>
          </div>
          <StyledTeam style={{ textAlign: "right" }}>{data.team2}</StyledTeam>
        </div>
      </div>
      <Divider />
    </React.Fragment>
  );
};

export default ScoreResult;
