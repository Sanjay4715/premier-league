import React from "react";
import styled from "@emotion/styled";
import { Divider, Modal } from "antd";
import moment from "moment";

import CancelIcon from "../../Assets/Logo/cancel.png";
import { getClubDetails } from "../../Component/GetClubDetails/GetClubDetails";
import { Link } from "react-router-dom";

const StyledTeam = styled.div({
  width: "35%",
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

const StyledLink = styled.a({
  fontSize: 20,
  fontFamily: "Gilroy-bold",
  ":hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

const ClubModal = (props) => {
  return (
    <Modal
      title={
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 10 }}>
            {props.clubDetails && props.clubDetails.logo}
          </div>
          <div style={{ flexGrow: 1 }}>
            <div style={{ fontSize: 22, fontFamily: "Gilroy-bold" }}>
              {props.clubDetails.name}
            </div>
            <div>{props.clubDetails.stadium}</div>
          </div>
          <img
            src={CancelIcon}
            alt="Cancel"
            style={{ width: 20, height: 20, cursor: "pointer" }}
            onClick={props.handleCancel}
          />
        </div>
      }
      closable={false}
      visible={props.isModalVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={false}
      width={700}
    >
      {props.matchDetails &&
        props.matchDetails.totalMatches.map((match, index) => (
          <div
            key={index}
            style={{
              backgroundColor: props.clubDetails.clubColor,
              color: props.clubDetails.textColor,
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <b>{moment(match.matchDate).format("MMMM Do YYYY")}</b>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <StyledTeam
                style={{
                  color: props.clubDetails.textColor,
                }}
              >
                {props.clubDetails.name}
              </StyledTeam>
              <div
                style={{
                  width: match.score === "To Be Played" ? "40%" : "30%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: 10 }}>{props.clubDetails.logo}</div>
                {match.score === "To Be Played" ? (
                  <div
                    style={{
                      fontFamily: "Gilroy-bold",
                      textAlign: "center",
                      color: props.clubDetails.textColor,
                      marginRight: 10,
                    }}
                  >
                    To Be Played
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <StyledScore>{match.score[0]}</StyledScore>
                    <StyledScore>{match.score[1]}</StyledScore>
                  </div>
                )}
                <div style={{ marginRight: 10 }}>
                  {getClubDetails(match.opponent).logo}
                </div>
              </div>
              <StyledTeam
                style={{
                  color: props.clubDetails.textColor,
                  textAlign: "right",
                }}
              >
                {match.opponent}
              </StyledTeam>
            </div>
            <Divider />
          </div>
        ))}
      <StyledLink
        href={props.clubDetails.siteUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Site
      </StyledLink>
    </Modal>
  );
};

export default ClubModal;
