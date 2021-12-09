import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";
import styled from "@emotion/styled";
import { getClubDetails } from "../../Component/GetClubDetails/GetClubDetails";

const StyledTable = styled(Table)({
  ".green": { backgroundColor: "#66b266" },
  ".red": { backgroundColor: "#ff4c4c" },
  ".ant-table-tbody>tr.ant-table-row-level-0:hover>td": {
    background: "inherit",
  },
});

const RootTable = styled.table({
  width: "100%",
});

const StyledColumnTitle = styled.th({
  fontSize: 18,
  fontFamily: "Gilroy-bold",
  color: "#37003c",
  paddingTop: 10,
  paddingBottom: 10,
});

const StyledColumnData = styled.td({
  fontFamily: "Gilroy-bold",
  fontSize: 15,
  color: "#37003c",
  textAlign: "center",
  paddingTop: 10,
  paddingBottom: 10,
  "&.club-title:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

const StyledForm = styled.span({
  width: 30,
  height: 30,
  borderRadius: "50%",
  padding: 10,
  color: "#fff",
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 5,
  "&.win": {
    backgroundColor: "green",
  },
  "&.lose": {
    backgroundColor: "red",
  },
  "&.draw": {
    backgroundColor: "grey",
  },
});

const StyledRow = styled.tr({
  borderBottom: `1px solid #eee`,
});

const CustomTable = ({ dataSource, columns, pointsOrder }) => {
  return (
    <RootTable>
      <thead>
        <StyledRow>
          {columns.map((column, index) => (
            <StyledColumnTitle key={index} style={{ width: column.width }}>
              {column.columnName}
            </StyledColumnTitle>
          ))}
        </StyledRow>
      </thead>
      <tbody>
        {dataSource.length !== 0 &&
          dataSource.map((data, index) => (
            <StyledRow
              key={index}
              style={{
                backgroundColor:
                  pointsOrder === "Descending"
                    ? index < 4
                      ? "#6fb76f"
                      : index > dataSource.length - 4 && "#ff6666"
                    : index < 3
                    ? "#ff6666"
                    : index > dataSource.length - 5 && "#6fb76f",
              }}
            >
              <StyledColumnData>
                {pointsOrder === "Descending"
                  ? index + 1
                  : dataSource.length - index}
              </StyledColumnData>
              <StyledColumnData
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="club-title"
              >
                <div style={{ marginLeft: 50, marginRight: 10 }}>
                  {getClubDetails(data.name).logo}
                </div>
                <div>{data.name}</div>
              </StyledColumnData>
              <StyledColumnData>{data.matchPlayed}</StyledColumnData>
              <StyledColumnData>{data.points}</StyledColumnData>
              <StyledColumnData>{data.won}</StyledColumnData>
              <StyledColumnData>{data.lost}</StyledColumnData>
              <StyledColumnData>{data.drawn}</StyledColumnData>
              <StyledColumnData>{data.gf}</StyledColumnData>
              <StyledColumnData>{data.ga}</StyledColumnData>
              <StyledColumnData>{data.gd}</StyledColumnData>
              <StyledColumnData
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {data.form.map((form, index) =>
                  form === "Win" ? (
                    <StyledForm className="win" key={index}>
                      W
                    </StyledForm>
                  ) : form === "Lose" ? (
                    <StyledForm className="lose" key={index}>
                      L
                    </StyledForm>
                  ) : (
                    <StyledForm className="draw" key={index}>
                      D
                    </StyledForm>
                  )
                )}
              </StyledColumnData>
            </StyledRow>
          ))}
      </tbody>
    </RootTable>
  );
};

export default CustomTable;
