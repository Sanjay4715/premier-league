import React from "react";
import styled from "@emotion/styled";

import CustomTableRow from "./CustomTableRow";

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

const StyledRow = styled.tr({
  borderBottom: `1px solid #eee`,
});

const CustomTable = ({
  dataSource,
  columns,
  pointsOrder,
  completeMatches,
  filterTeam,
}) => {
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
            <CustomTableRow
              key={index}
              index={index}
              data={data}
              pointsOrder={pointsOrder}
              dataSource={dataSource}
              completeMatches={completeMatches}
              filterTeam={filterTeam}
            />
          ))}
      </tbody>
    </RootTable>
  );
};

export default CustomTable;
