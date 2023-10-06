import React, {useState} from 'react';
import MenuButton from "../MenuButton/MenuButton";
import NavMenu from "../NavMenu/NavMenu";
import NavDrawer from "../NavDrawer/NavDrawer";

const MainMenu = ({scroll}) => {

	const [open, setOpen] = useState(false)
	const [anchor, setAnchor] = useState(null);

	const handleClick = (e) => {
		setAnchor(e.currentTarget)
		setOpen(true)
	}


	return (
		<>
			<MenuButton
				in={scroll}
				setOpen={setOpen}
			/>

			{/*<NavMenu
				anchor={anchor}
				setAnchor={setAnchor}
			/>*/}
			<NavDrawer
				open={open}
				setOpen={setOpen}
			/>

		</>

	);
};

export default MainMenu;