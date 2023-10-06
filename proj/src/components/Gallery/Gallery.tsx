import React, {useCallback, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import GalleryItem from "./GalleryItem/GalleryItem";
import ImageViewer from '@haz3l/react-images-viewer';

const list = [
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal2
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal3
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal2
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal3
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal2
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal3
	},
{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal2
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal3
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal2
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal3
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal1
	},
	{
		title: 'Оконные откосы из латуни',
		image: gal2
	},

]



const Gallery = () => {

	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index)
		setIsViewerOpen(true)
	}, [])

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	}

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

				{list.map((item, index) => (
					<GalleryItem
						title={item.title}
						image={item.image}
						onClick={() => openImageViewer(index)}
					/>
				))}

			</Grid>
			<ImageViewer
				imgs={list.map(item => (
					{
						src: item.image,
						caption: item.title,
					}
				))}
				currImg={currentImage}
				isOpen={isViewerOpen}
				onClickPrev={() => setCurrentImage(prev => prev - 1)}
				onClickNext={() => setCurrentImage(prev => prev + 1)}
				onClose={closeImageViewer}
				backdropCloseable
				/*backgroundStyle={{
					paddingTop: '16px',
					paddingBottom: '16px',
				}}*/
			/>
		</>

	);
};

export default Gallery;