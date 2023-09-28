import React, {FC} from 'react';
import {Grid, Typography} from "@mui/material";


interface BlockItemProps {

	image?: string,
	title: string,
	body: string

}

const BlockItem: FC<BlockItemProps> =
	({
		 image,
		 title,
		 body
	}) => {
	return (
		<Grid
			item
			xs={12}
			md={4}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2
			}}
		>

			{image && <img
                style={{
					width: '64px',
					height: '64px',
				}}
                src={image}
                alt=""
            />}


			<Typography
				variant={'h5'}
				sx={{
					fontWeight: 600
				}}
			>
				{title}
			</Typography>


			<Typography
			>
				{body}
			</Typography>

		</Grid>
	);
};

export default BlockItem;