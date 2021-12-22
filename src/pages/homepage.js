import React from "react";

import { SearchUserConatiner } from "../containers";
import "./style.css";

export const HomePage = () => {
	return (
		<>
			<h1 className='title'>Search Github User</h1>
			<SearchUserConatiner className={"inputbox"} />
		</>
	);
};
