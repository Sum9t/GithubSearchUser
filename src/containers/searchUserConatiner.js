import React, { useState } from "react";
import {getUserList} from "../api/apiservice";
import { InputBox } from "../components/inputbox/InputBox";

export const SearchUserConatiner = (className) => {
  const [userInput, setUserInput] = useState("");

  const onChange = (e) => {
    const { value } = e.target;
    setUserInput(value);
    const result = getUserList(value);
    // console.log(result, "hhhhhh");
  };

  return (
    <InputBox
      onChangeInput={onChange}
      value={userInput}
      className={className}
    />
  );
};
