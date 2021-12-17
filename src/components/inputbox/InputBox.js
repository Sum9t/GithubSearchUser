import React from "react";

export const InputBox = ({ onChangeInput, value, className, type }) => {
  return (
    <input
      type={type}
      value={value}
      className={className}
      onChange={onChangeInput}
    />
  );
};
