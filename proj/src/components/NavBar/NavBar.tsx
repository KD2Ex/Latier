import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import logoFull from '../../assets/logo/logoName.png'
import logoImg from '../../assets/logo/logoImg.png'

const NavBar = () => {


	const handleAnchorCatalog = (e) => {
		console.log(e.target)
		window.location.href = "#catalog"
	}

	const handleAnchorGallery = (e) => {
		console.log(e.target)
		window.location.href = "#gallery"
	}

	const handleAnchorContacts = (e) => {
		console.log(e.target)
		window.location.href = "#contacts"
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				px: 4,
				py: 2
			}}
		>

			<Box

			>

				<img
					src={logoFull}
					alt=""
					style={{
						maxWidth: '250px',
						maxHeight: '90px',
						marginTop: 8
					}}
				/>

			</Box>


			<Box
				sx={{
					display: {xs: 'none', md: 'flex'},
					gap: 2,
					'& .MuiTypography-root': {
						fontWeight: 600,
						cursor: 'pointer'
					}
				}}
			>
				<Typography
					onClick={handleAnchorContacts}
				>
					Контакты
				</Typography>
				<Typography
					onClick={handleAnchorGallery}
				>
					Портфолио
				</Typography>
				<Typography
					onClick={handleAnchorCatalog}
				>
					Каталог
				</Typography>
			</Box>


			{/*<Box
				sx={{
				}}
			>
				<Typography
					sx={{
						fontWeight: 600
					}}
				>
					+7 (495) 150-39-44<br/>
					info@latuning.ru
				</Typography>

			</Box>*/}
		</Box>
	);
};

export default NavBar;