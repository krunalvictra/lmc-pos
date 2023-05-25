import React from "react";
import styles from "./directory.module.scss";
import { CheckboxGroup } from "../common/checkbox";

const FilterDirectory = ({ filter, setFilter }) => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleCheckboxChange = (selectedValues) => {
    console.log("Selected values:", selectedValues);
  };
  return (
    <div className={` ${styles.filter}`}>
      <CheckboxGroup
        options={options}
        onChange={handleCheckboxChange}
        wrapClassName=""
        className=""
      />
    </div>
  );
};

export default FilterDirectory;
