import React, {FC} from 'react';
import {Box, Grid, Typography} from "@mui/material";

interface CatalogItemProps {

	image: string,
	name: string

}

const CatalogItem: FC<CatalogItemProps> =
	({
		image,
		name
	 }) => {


	return (
		<Grid
			item
			xs={12}
			md={4}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',

			}}
		>
			<Box
				sx={{
					p: 3,
					transition: 'background-color 300ms',
					borderRadius: 2,
					"&:hover" : {
						bgcolor: 'secondary.hover'
					}
				}}
			>
				<Box
					component={'img'}
					sx={{
						width: {xs: '200px', md: '350px'},
						height: {xs: '200px', md: '350px'},
					}}
					src={image}
					alt={name}
				/>

				<Typography
					variant={'h5'}
					sx={{
						textAlign: 'center'
					}}
				>

					{name}

				</Typography>

			</Box>

		</Grid>
	);
};

export default CatalogItem;