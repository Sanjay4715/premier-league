import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const StyledItem = styled.div({
  width: 100,
  fontSize: 16,
  fontWeight: "bold",
  fontFamily: "Gilroy",
  height: "inherit",
  textAlign: "center",
  ":hover": {
    cursor: "pointer",
    borderBottomStyle: "solid",
    borderBottomColor: "#fff",
    borderBottomWidth: "5px",
  },
  "&.item-selected": {
    borderBottomStyle: "solid",
    borderBottomColor: "#fff",
    borderBottomWidth: "5px",
  },
});

const CustomMenuItem = ({ name, url, urlArr, activeUrl, currentPage }) => {
  let navigate = useNavigate();
  return (
    <StyledItem
      onClick={() => navigate(url)}
      className={
        name.toLowerCase() === currentPage.toLowerCase() ? "item-selected" : ""
      }
    >
      {name}
    </StyledItem>
  );
};

export default CustomMenuItem;
