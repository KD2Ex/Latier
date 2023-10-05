import React from 'react';
import {Menu, MenuItem} from "@mui/material";



const NavMenu = ({anchor, setAnchor}) => {

	const open = Boolean(anchor)

	const handleClose = () => {
		setAnchor(false)
	}

	return (
		<Menu
			anchorEl={anchor}
			open={open}
			onClose={handleClose}
		>

			<MenuItem>
				Каталог
			</MenuItem>

			<MenuItem>
				Каталог
			</MenuItem>

			<MenuItem>
				Каталог
			</MenuItem>

		</Menu>
	);
};

export default NavMenu;