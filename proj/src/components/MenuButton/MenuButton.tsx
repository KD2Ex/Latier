import React, {useRef, useState} from 'react';
import {Transition} from "react-transition-group";
import {Box, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const defaultStyles = {
	opacity: 0,
	position: 'fixed',
	top: 0,
	right: 0,
	mr: 2,
	my: 2,
	borderRadius: 0,
	transition: `opacity 300ms`
}

const transitionStyles = {
	entering: {
		opacity: 1,
		visibility: 'visible'
	},
	entered: {
		opacity: 1,
	},
	exiting: {
		opacity: 1,
	},
	exited: {
		opacity: 0,
		pointerEvents: 'none'
	},

}

const MenuButton = ({in: inProp, setOpen}) => {

	const nodeRef = useRef(null)

	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setOpen(true);

	}

	return (
		<Transition
			nodeRef={nodeRef}
			in={inProp}
			timeout={300}
			/*onExited={() => setVisible(false)}
			onExiting={() => setVisible(true)}
			onEntering={() => setVisible(true)}*/
		>
			{state => (
				<Box
					sx={{
						...defaultStyles,
						...transitionStyles[state],
						//display: `${visible ? 'block' : 'none'}`
					}}
				>

					<IconButton
						onClick={handleClick}
						sx={{
							bgcolor: 'primary.main',
							width: 64,
							height: 64,
							borderRadius: 'none',
							'&:hover': {
								bgcolor: 'primary.dark'
							}
						}}
					>
						<MenuIcon/>
					</IconButton>

				</Box>
			)}

		</Transition>

	);
};

export default MenuButton;