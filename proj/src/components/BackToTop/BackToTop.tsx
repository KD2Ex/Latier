import React, {useRef} from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import NorthIcon from '@mui/icons-material/North';
import {Transition} from "react-transition-group";

const defaultStyles = {
	opacity: 0,
	position: 'fixed',
	bottom: 0,
	right: 0,
	mr: 4,
	mb: 2,
	borderRadius: 2,
	bgcolor: 'white',
	px: 2,
	py: 1,
	transition: `opacity 300ms`,
	'&:hover': {
		bgcolor: 'primary.light',
	}
}

const transitionStyles = {
	entering: {
		opacity: 1
	},
	entered: {
		opacity: 1,
		transition: 'background-color 300ms'
	},

}

const BackToTop = ({in: inProp}) => {

	const nodeRef = useRef(null)

	const handleClick = () => {
		window.scrollTo(0,0)
	}

	return (
		<Transition
			nodeRef={nodeRef}
			in={inProp}
			timeout={300}
		>
			{state => (
				<Box
					onClick={handleClick}
					sx={{
						...defaultStyles,
						...transitionStyles[state],
					}}
				>


					<Typography
						sx={{
							color: 'primary.contrastText'
						}}
					>
						Наверх
					</Typography>
					{/*<IconButton
						onClick={handleClick}
						sx={{
							bgcolor: 'primary.main',
							width: 64,
							height: 64,
							'&:hover': {
								bgcolor: 'primary.dark'
							}
						}}
					>
						<NorthIcon/>
					</IconButton>*/}

				</Box>
			)}

		</Transition>

	);
};

export default BackToTop;