import React, {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import logo from "../../Logo/Logo";

const GalleryItem = ({title, image}) => {

	const [visible, setVisible] = useState(false)

	const handleMouseEnter = () => {
		setVisible(true)
	}

	const handleMouseLeave = () => {
		setVisible(false)
	}

	return (
		<Grid
			item
			xs={12}
			md={6}
			lg={3}

			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				position: 'relative'
			}}
		>

			<Box
				component={'img'}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				sx={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					transition: 'opacity 300ms',
					'&:hover': {
						opacity: '0.5'
					}
				}}
				src={image}

				alt=""
			/>

			<Typography
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				sx={{
					opacity: `${visible ? '1' : '0'}`,
					textAlign: 'center',
					fontSize: 18,
					position: 'absolute',
					left: '50%',
					top: '50%',
					width: '100%',
					px: 2,
					fontWeight: 600,
					zIndex: 1600,
					transform: 'translate(-50%, -50%)',
					transition: ' opacity 300ms',

				}}
			>
				{title}
			</Typography>

		</Grid>
	);
};

export default GalleryItem;