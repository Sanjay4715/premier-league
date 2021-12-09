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

const SeasonSelect = ({ value, setData, options, placeholder, style }) => {
  return (
    <CustomSelect
      placeholder={placeholder}
      value={value}
      onChange={(value) => setData(value)}
      dropdownClassName="optionStyle"
      style={style}
    >
      {options &&
        options.map((data, index) => (
          <Option key={index} value={data.name}>
            {data.name}
          </Option>
        ))}
    </CustomSelect>
  );
};

export default SeasonSelect;
