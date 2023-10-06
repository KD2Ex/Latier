import React, {useRef} from 'react';
import {Transition} from "react-transition-group";
import logoFull from "../../assets/logo/logoImg.png";
import {Box} from "@mui/material";


const defaultStyles = {
	opacity: 0,
	position: 'fixed',
	top: 0,
	left: 0,
	marginLeft: '32px',
	marginTop: '16px',
	transition: `opacity 300ms`
}

const transitionStyles = {
	entering: {
		/*animation: `1s linear 0s slidein`,
		display: 'block',
		'@keyframes slidein': {
			from: {
				marginBottom: '100%',
			},
			to: {
				marginBottom: '0%'
			}
		}*/
		opacity: 1
	},
	entered: {
		opacity: 1
	},

}

const Logo = ({in: inProp}) => {
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
					ref={nodeRef}
					sx={{
						...defaultStyles,
						...transitionStyles[state]
					}}
				>
					<img
						src={logoFull}
						alt=""
						style={{
							cursor: 'pointer',
							maxWidth: '64px',
							maxHeight: '64px',
							marginTop: 8
						}}
					/>

				</Box>
			)}


		</Transition>
	);
};

export default Logo;