import React, {FC} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {data} from "./data";
import BlockItem from "./BlockItem/BlockItem";



interface InfoBlockProps {

	title: string,


}

const InfoBlock: FC<InfoBlockProps> =
	({
		title
	 }) => {



	return (
		<Box
			sx={{
				'& .MuiTypography-root': {
					//color: 'black'
				}
			}}
		>

			<Typography
				variant={'h3'}
				sx={{
					textAlign: 'center',
					my: 4
				}}
			>

				{title}
			</Typography>


			<Grid
				container
				spacing={4}
			>

				{data.map((item, index) => (
					<BlockItem
						key={index}
						title={item.title}
						body={item.body}
						Image={item.image}
					/>
				))}

			</Grid>

		</Box>
	);
};

export default InfoBlock;