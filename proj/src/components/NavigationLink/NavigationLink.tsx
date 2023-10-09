import React from 'react';
import {Typography} from "@mui/material";

const NavigationLink = ({href, body, ...props}) => {

	const handleClick = () => {
		window.location.href = href
	}

	return (
		<Typography
			{...props}
			onClick={handleClick}
		>
			<a href={href}></a>
			{body}
		</Typography>
	);
};

export default NavigationLink;