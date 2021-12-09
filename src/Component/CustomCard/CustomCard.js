import React from "react";
import styled from "@emotion/styled";
import { Skeleton, Card } from "antd";

const { Meta } = Card;

const StyledCard = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justfiyContent: "center",
  border: `1px solid #181818`,
  borderRadius: 5,
  bottom: 0,
  fontFamily: "Gilroy-bold",
});

const CustomCard = (props) => {
  const loading = props.data ? false : true;
  return (
    <Skeleton loading={loading} avatar active>
      <StyledCard>
        <div
          style={{
            width: "100%",
            backgroundColor: props.data.clubColor,
            color: props.data.textColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              padding: 10,
              background: "#fff",
              display: "flex",
              justfiyContent: "center",
            }}
          >
            {props.data.logo}
          </div>
          <div style={{ fontSize: 17, paddingTop: 10 }}>{props.data.name}</div>
          <div style={{ fontFamily: "Gilroy", fontSize: 14 }}>
            {props.data.stadium}
          </div>
        </div>
      </StyledCard>
    </Skeleton>
  );
};

export default CustomCard;
