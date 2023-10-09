import React, {FC} from 'react';
import {Grid, Typography} from "@mui/material";


interface BlockItemProps {

	Image?: string,
	title: string,
	body: string

}

const BlockItem: FC<BlockItemProps> =
	({
		 Image,
		 title,
		 body
	}) => {
	return (
		<Grid
			item
			xs={12}
			sm={6}
			lg={4}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2
			}}
		>

			{Image && <img
                style={{
					width: '64px',
					height: '64px',

				}}
                src={Image}
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