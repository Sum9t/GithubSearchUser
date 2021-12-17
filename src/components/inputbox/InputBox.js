import React from "react";

export const InputBox = ({ onChange, onKeyDown, value, className, type }) => {
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
    />
  );
};
