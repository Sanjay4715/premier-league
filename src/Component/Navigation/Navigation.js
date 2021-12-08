import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Layout } from "antd";
import CustomMenuItem from "./CustomMenuItem";

const { Header } = Layout;

const StyledHeader = styled(Header)({
  backgroundColor: "#37003c",
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

  const [activeUrl, setActiveUrl] = useState(false);
  const [urlArr, setUrlArr] = useState();

  return (
    <Layout>
      <StyledHeader>
        {MenuItems.map((menu, index) => (
          <CustomMenuItem
            key={index}
            name={menu.name}
            url={menu.url}
            currentPage={props.page}
          />
        ))}
      </StyledHeader>
    </Layout>
  );
};

export default Navigation;
