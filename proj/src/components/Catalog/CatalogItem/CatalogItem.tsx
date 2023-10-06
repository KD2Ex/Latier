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
			sm={6}
			lg={4}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',

			}}
		>
			<Box
				sx={{
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
						/*width: {xs: '200px', md: '350px'},
						height: {xs: '200px', md: '350px'},*/
						width: '100%',
						height: '90%',
						px: 2,
						pt: 2
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