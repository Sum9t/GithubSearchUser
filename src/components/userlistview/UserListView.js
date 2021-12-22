import React from "react";
import { NoSuggestion } from "../nosuggestion/NoSuggestion";
import "./style.css";

export const UserListView = ({ users }) => {
	console.log(users.length);
	return users.length ? (
		<div className='suggestions'>
			{users.map((suggestion, index) => {
				return (
					<div key={suggestion.id}>
						<div className='list'>
							<a href={suggestion.html_url} target='blank'>
								<div className='maincontainer'>
									<div className='imgdiv'>
										<img className='pic' src={suggestion.avatar_url} alt='' />
									</div>
									<div className='gitname'>
										<p>{suggestion.login}</p>
									</div>
								</div>
							</a>
						</div>
						{index !== 4 ? <div className='separator' /> : null}
					</div>
				);
			})}
		</div>
	) : (
		<NoSuggestion />
	);
};
