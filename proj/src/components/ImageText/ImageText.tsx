import React, {FC, ReactNode} from 'react';
import {Grid, Typography} from "@mui/material";

interface ImageTextProps {
	reverse: boolean,
	title: string,
	image: string,
	children: ReactNode,
	maxWidth?: number,
	maxHeight?: number
}

const ImageText: FC<ImageTextProps> =
	({
		reverse,
		title,
		 image,
		children,
		 maxWidth,
		 maxHeight
	 }) => {



	return (
		<Grid
			container
			spacing={2}
			sx={{
				display: 'flex',
				flexDirection: `${reverse ? 'row-reverse' : 'row' }`,
				my: 2
			}}
		>

			<Grid
				item
				xs={12}
				md={6}
			>
				<img
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						maxWidth: `${maxWidth ? `${maxWidth}px` : '100%'}`,
						maxHeight: `${maxHeight ? `${maxHeight}px` : '100%'}`,
					}}
					src={image}
					alt=""
				/>
			</Grid>

			<Grid
				item
				xs={12}
				md={6}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: 2
				}}
			>
				<Typography
					variant={'h3'}
					sx={{
						fontWeight: 600
					}}
				>
					{title}
				</Typography>
				{children}
			</Grid>

		</Grid>
	);
};

export default ImageText;