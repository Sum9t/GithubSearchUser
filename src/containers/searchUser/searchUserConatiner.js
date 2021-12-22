import React, { useCallback, useState } from "react";
import { getUserList } from "../../api/apiservice";
import { InputBox, UserListView } from "../../components";
import { SearchIcon } from "../../asset/images";
import { debounce } from "../../Helper";
import "./style.css";
import { useEffect } from "react/cjs/react.development";

export const SearchUserConatiner = (className) => {
	const [userInput, setUserInput] = useState("");
	const [userList, setUserList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const debounceDropDown = useCallback(
		debounce(async (nextValue) => {
			if (nextValue.trimStart() != "") {
				const result = await getUserList(nextValue);
				setUserList(result.items);
				setIsLoading(false);
			} else {
				setUserList([]);
				setIsLoading(false);
			}
		}, 200),
		[]
	);

	const onChange = async (e) => {
		setIsLoading(true);
		const { value } = e.target;
		setUserInput(value);
		debounceDropDown(value);

		setIsLoading(false);
	};

	return (
		<>
			<div className='textinputcontainer'>
				<img src={SearchIcon} alt='' className='usericon' />
				<InputBox
					onChangeInput={onChange}
					value={userInput}
					className={className}
					placeholder='Type user name'
				/>
				{isLoading ? <div className='loader'></div> : null}
			</div>
			<div>{userInput && <UserListView users={userList} />}</div>
		</>
	);
};
