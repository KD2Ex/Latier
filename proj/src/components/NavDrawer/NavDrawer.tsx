import React from 'react';
import {Drawer, List, ListItemButton, Menu, MenuItem} from "@mui/material";
import imgFull from '../../assets/logo/logoFull.png'

const list = [
	{
		title: 'Каталог',
		href: '#catalog'
	},
	{
		title: 'Портфолио',
		href: '#gallery'
	},
	{
		title: 'Контакты',
		href: '#contacts'
	},

]

const NavDrawer = ({open, setOpen}) => {

	const handleClose = () => {
		setOpen(false)
	}

	return (

		<>
			<Drawer
				anchor={'right'}
				open={open}
				onClose={handleClose}
			>

				<List
					sx={{
						width: '240px',
						'& *': {
							fontWeight: 600
						}
					}}
				>
					<img
						src={imgFull}
						alt=""
						style={{
							width: '100%',
							height: '44px',
							paddingRight: '16px',
							paddingLeft: '16px',

						}}
					/>
					{list.map(item => (
						<ListItemButton
							onClick={() => {
								window.location.href = item.href
							}}
						>

							{item.title}
						</ListItemButton>
					))}
				</List>

			</Drawer>
		</>

	);
};

export default NavDrawer;