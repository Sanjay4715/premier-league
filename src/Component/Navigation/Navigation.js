import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Layout } from "antd";
import CustomMenuItem from "./CustomMenuItem";
import PLogo from "../../Assets/Logo/pl2.png";

const { Header } = Layout;

const StyledHeader = styled(Header)({
  backgroundColor: "#37003c",
  paddingLeft: 0,
  color: "#fff",
  display: "flex",
  alignItems: "center",
});

const Navigation = (props) => {
  const MenuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Results",
      url: "/results",
    },
    {
      name: "Table",
      url: "/table",
    },
  ];

  return (
    <Layout>
      <StyledHeader>
        <img src={PLogo} alt="log" style={{ width: 100, height: "inherit" }} />
        <div style={{ display: "flex", flexGrow: 1 }}>
          {MenuItems.map((menu, index) => (
            <CustomMenuItem
              key={index}
              name={menu.name}
              url={menu.url}
              currentPage={props.page}
            />
          ))}
        </div>
      </StyledHeader>
    </Layout>
  );
};

export default Navigation;
