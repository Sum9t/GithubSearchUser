import React from "react";
import "./style.css";

export const InputBox = ({
	onChangeInput,
	value,
	className,
	type,
	placeholder,
}) => {
	return (
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			className={className.className}
			onChange={onChangeInput}
		/>
	);
};
