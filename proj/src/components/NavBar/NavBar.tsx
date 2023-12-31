import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import logoFull from '../../assets/logo/logoName.png'
import logoFullBlack from '../../assets/logo/logoNameBlack.png'
import logoImg from '../../assets/logo/logoImg.png'
import NavigationLink from "../NavigationLink/NavigationLink";
import {hrefList} from "../../data";

const NavBar = () => {

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				px: 4,
				py: 2,
				bgcolor: 'text.primary'
			}}
		>

			<Box

			>

				<img
					src={logoFullBlack}
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
						cursor: 'pointer',
						color: 'primary.contrastText'
					}
				}}
			>

				{hrefList.map((item, index) => (
					<NavigationLink
						key={index}
						href={item.href}
						body={item.title}
					/>
				) )}

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