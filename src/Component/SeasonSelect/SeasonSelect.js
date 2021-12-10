import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Select } from "antd";

const { Option } = Select;

const CustomSelect = styled(Select)({
  width: 120,
  fontFamily: "Gilroy",
  color: "#37003c",
  border: `1px solid #37003c`,
  fontWeight: "bold",
  ":hover": {
    border: `1px solid #37003c`,
  },
});

const SeasonSelect = ({ seasonValue, setSeason }) => {
  const [years, setYears] = useState();

  useEffect(() => {
    const year = new Date().getFullYear();
    const years = Array.from(
      new Array(5),
      (val, index) =>
        year - index + "-" + (year - index + 1).toString().slice(-2)
    );
    setSeason(
      !seasonValue ? year - 1 + "-" + year.toString().slice(-2) : seasonValue
    );
    setYears(years);
  }, [seasonValue]);

  return (
    <div>
      <div
        style={{
          fontSize: 16,
          fontWeight: "bold",
          fontFamily: "Gilroy",
        }}
      >
        Season
      </div>
      <CustomSelect
        placeholder="Select Season"
        value={seasonValue}
        onChange={(value) => setSeason(value)}
        dropdownClassName="optionStyle"
      >
        {years &&
          years.map((year, index) => (
            <Option key={index} value={year}>
              {year}
            </Option>
          ))}
      </CustomSelect>
    </div>
  );
};

export default SeasonSelect;
