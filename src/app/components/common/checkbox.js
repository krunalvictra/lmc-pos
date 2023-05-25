import React, { useEffect, useState } from "react";

export const CheckboxGroup = ({
  options,
  onChange,
  wrapClassName = "",
  className = "",
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (value) => {
    setSelectedValues((selectedValue) => [...selectedValue, value]);
  };

  useEffect(() => {
    if (selectedValues.length !== 0) {
      onChange(selectedValues);
    }
  }, [selectedValues]);

  return (
    <div className={wrapClassName}>
      {options?.map((option) => (
        <label key={option.value} className={className}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
