import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import gal1 from '../../assets/gal1.jpg'
import GalleryItem from "./GalleryItem/GalleryItem";

const list = [
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},

]

const Gallery = () => {
	return (
		<>
			<Typography
				variant={'h2'}
				id={'gallery'}
				sx={{
					textAlign: 'center',
					my: 2
				}}
			>
				<a href="#gallery"></a>
				Наши работы
			</Typography>
			<Grid
				container
				spacing={2}
				sx={{
					py: 2
				}}
			>

				{list.map(item => (
					<GalleryItem
						title={item.title}
						image={item.image}
					/>
				))}

			</Grid>
		</>

	);
};

export default Gallery;