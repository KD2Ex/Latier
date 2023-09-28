import React, {useEffect, useState} from 'react';
import {
	Box, Button,
	Grid,
	IconButton,
	InputAdornment, Select,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography
} from "@mui/material";
import {data, typeOptions} from "./data";
import CatalogItem from "./CatalogItem/CatalogItem";
import SearchIcon from '@mui/icons-material/Search';

const Catalog = () => {

	const [type, setType] = useState('')
	const [sort, setSort] = useState()

	useEffect(() => {

	}, [])

	const handleType = (e, newValue) => {
		setType(newValue)
	}

	return (
		<Box>

			<Typography
				variant={'h2'}
				sx={{
					textAlign: 'center',
					my: 4
				}}
			>

				Что мы изготавливаем?

			</Typography>

			{/*<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					gap: 2
				}}
			>

				<ToggleButtonGroup
					value={type}
					exclusive
					onChange={handleType}
				>

					{typeOptions.map((item, index) => (
						<ToggleButton value={item}>
							{item}
						</ToggleButton>
					))}

				</ToggleButtonGroup>

				<TextField
					size={'small'}
					label={'Поиск'}
					sx={{
						p: 0,
						'& .MuiOutlinedInput-root': {
							p: 0
						}
					}}
					InputProps={{
						endAdornment: <InputAdornment
							position={'end'}
							sx={{
								p: 0,
								m: 0,

							}}
						>
							<Button
								variant={'contained'}
								sx={{
									borderRadius: '0px 4px 4px 0px',
									bgcolor: 'secondary.dark',
									'&:hover': {
										bgcolor: 'secondary.dark'
									},
									borderLeft: '1px solid',
									borderColor: 'rgb(73,73,73)'
								}}
							>
								<SearchIcon
									sx={{
										color: 'rgb(222,222,222)',
										'&:hover': {
											color: 'white'
										}
									}}
								></SearchIcon>
							</Button>
						</InputAdornment>
					}}
				/>


				<Select

				>



				</Select>

			</Box>*/}

			<Grid
				container
			>
				{data.map((item, index) => (
					<CatalogItem
						image={item.image}
						name={item.name}
					/>
				))}
			</Grid>



		</Box>
	);
};

export default Catalog;