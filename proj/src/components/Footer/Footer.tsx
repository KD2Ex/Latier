import React from 'react';
import {Box, Typography} from "@mui/material";
import {hrefList} from "../../data";
import imgName from '../../assets/logo/logoName.png'
import NavigationLink from "../NavigationLink/NavigationLink";

const Footer = () => {

	const handleClick = () => {
		window.scrollTo(0,0)
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: {xs: 'center', md: 'space-between'},
				flexWrap: 'wrap',
				alignItems: 'center',
				'& .MuiTypography-root': {
					fontWeight: 600
				},
				py: 2,
				px: 4,
				gap: 2
			}}
		>



			<Box
				sx={{
					display: 'flex',
					gap: 2,
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				{hrefList.map((item, index) => (
					<NavigationLink
						variant={'xs'}
						sx={{
							cursor: 'pointer'
						}}
						key={index}
						href={item.href}
						body={item.title}
					/>
					/*<Typography
						variant={'xs'}
					>
						<a href={item.href}></a>
						{item.title}
					</Typography>*/
				))}
			</Box>

			<Box
				component={'img'}
				sx={{
					width: '200px',
					height: '100%',
					cursor: 'pointer',
					alignSelf: 'center',
					margin: {xs: 'auto', md: 0},
				}}
				onClick={handleClick}
				src={imgName} alt=""/>

		</Box>
	);
};

export default Footer;