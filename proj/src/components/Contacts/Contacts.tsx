import React from 'react';
import {Box, Typography} from "@mui/material";

const Contacts = () => {



	return (
		<Box
			id={'contacts'}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				'& .MuiTypography-root': {
					textAlign: 'center'
				}
			}}
		>

			<a href="#contacts"></a>
			<Typography
				variant={'h3'}
			>
				Наши контакты
			</Typography>

			<Typography
				variant={'h5'}
			>
				Производство: г. Краснодар, мкр-н Сходня, ул. Первомайская, д. 56А
			</Typography>



		</Box>
	);
};

export default Contacts;