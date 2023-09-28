import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import NavBar from "../components/NavBar/NavBar";
import img1 from "../assets/img1_cropped.jpg";
//import img1 from "../assets/brass-PhotoRoom (1).png";
import ImageText from "../components/ImageText/ImageText";
import imgTest1 from '../assets/IMG_1251-HDR.jpg'
import InfoBlock from "../components/InfoBlock/InfoBlock";
import Catalog from "../components/Catalog/Catalog";
import logoFull from "../assets/logo/logoName.png";

const MainPage = () => {

	console.log(window.scrollY)

	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		console.log(window.scrollY)
		setScroll(window.scrollY > 100)
	}

	useEffect(() => {

		window.addEventListener('scroll', handleScroll)

	}, [])

	useEffect(() => {

		if (scroll) {

		}

	}, [scroll])

	return (
		<Box
			onScroll={() => console.log(window.scrollY)}
			sx={{

			}}
		>
			{/*<Box
				sx={{
					position: 'fixed',
					p: 2,
					pl: 4,
					visibility: `${scroll ? 'visible' : 'hidden'}`,
					opacity: `${scroll ? '1' : '0'}`,
					transition: 'visibility 300ms opacity 500ms linear'
				}}
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

			</Box>*/}

			<NavBar/>
			
			<Grid
				container
				sx={{
					width: '100%',
					maxWidth: '1350px',
					height: '90vh',
					margin: 'auto',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					mb: 16,
				}}
			>
				<Grid
					item
					xs={12}
					md={6}
				>
					<Typography
						variant={'h2'}
						sx={{
							pb: 16,
							pl: {xs: 4, lg: 0},
							textAlign: 'left',
							"& span": {
								color: 'primary.main',
							}
						}}
					>
						Профиль из <span> латуни, меди, и нержавеющей стали</span>  от производителя
					</Typography>

				</Grid>


				<Grid
					item
					xs={12}
					md={6}
					sx={{
						height: '100%',
						display: {xs: 'none', md: 'flex'},
						flexDirection: 'column',
						justifyContent: 'flex-end'

					}}
				>
					<Box
						component={'img'}
						src={img1}
						sx={{
							objectFit: 'contain',
							width: '600px',
							height: '850px',
							opacity: '0.7',
							transition: 'opacity 300ms',
							right: 0,
							'&:hover': {
								opacity: '1.2'
							},
							objectPosition: 'bottom center'
						}}
					>
				</Box>


				</Grid>
				{/*<img
					style={{

						width: '100%',
						height: '100%',
						opacity: '0.7',
						transition: 'opacity 300ms',
					}}
					alt=""/>*/}
			</Grid>


			{/*<Box
				sx={{
					maxWidth: '1200px',
					display: 'flex',
					margin: 'auto'
				}}
			>
				<Typography
					sx={{
						textAlign: 'center'
					}}
				>
					СДЕЛАЕМ БЕСПЛАТНЫЙ ДИЗАЙН-ПРОЕКТ ОСВЕЩЕНИЯ ОФИСА
					Расскажите нам о дизайн-проекте, и мы рассчитаем необходимую освещённость по СНиПам. При необходимости, можем изменить габариты и освещённость светильников
				</Typography>

			</Box>*/}

			<Box
				sx={{
					maxWidth: '1200px',
					display: 'flex',
					margin: 'auto',
					flexDirection: 'column',
					justifyContent: 'center'
				}}
			>

				<ImageText
					image={imgTest1}
					title={'О нас'}
					maxHeight={600}
				>
					<Typography>
						Декорирование стыков разных материалов металлической полосой — самое простое эстетическое и функциональное решение.
					</Typography>
					<Typography>
						Декорирование стыков разных материалов металлической полосой — самое простое эстетическое и функциональное решение.
					</Typography>
					<Typography>
						Декорирование стыков разных материалов металлической полосой — самое простое эстетическое и функциональное решение.
					</Typography>
				</ImageText>

				<ImageText
					image={imgTest1}
					title={'О нас'}
					maxHeight={600}
					reverse
				>
					<Typography>
						Декорирование стыков разных материалов металлической полосой — самое простое эстетическое и функциональное решение.
					</Typography>
					<Typography>
						Декорирование стыков разных материалов металлической полосой — самое простое эстетическое и функциональное решение.
					</Typography>
					<Typography>
						Декорирование стыков разных материалов металлической полосой — самое простое эстетическое и функциональное решение.
					</Typography>
				</ImageText>


			</Box>




			<Box
				sx={{
					bgcolor: 'secondary.dark',
					mt: 4
				}}
			>

				<Box
					sx={{
						maxWidth: '1300px',
						display: 'flex',
						margin: 'auto',
						pb: 6
					}}
				>

					<InfoBlock
						title={'Почему выбирают нас?'}
					/>
				</Box>

			</Box>


			<Box
				sx={{
					maxWidth: '1300px',
					display: 'flex',
					margin: 'auto'
				}}
			>

				<Catalog/>

			</Box>



		</Box>
	);
};

export default MainPage;