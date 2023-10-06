import React from 'react';
import {Drawer, List, ListItemButton, Menu, MenuItem} from "@mui/material";
import imgFull from '../../assets/logo/logoFull.png'
import {hrefList} from "../../data";

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
				sx={{
					'& .MuiPaper-root': {
						//bgcolor: 'secondary.dark'

					}
				}}
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
					{hrefList.map(item => (
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