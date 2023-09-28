import {createTheme} from "@mui/material";


export const theme = createTheme({

	palette: {
		contrastThreshold: 3,
		primary: {
			main: 'rgb(252,164,1)',
			light: '#e3a42e',
			dark: '#db8300',
			contrastText: 'rgb(0,0,0)',
		},
		secondary: {
			main: 'rgb(255,255,255)',
			dark: 'rgb(33,33,33)',
			hover: 'rgb(70,70,70)',
		},
		background: {
			default: 'rgb(0,1,1)',
		},
		text: {
			primary: 'rgb(220,220,220)',
			//secondary: '#e3a42e',
			contrastText: 'rgb(0,0,0)',

		},
		mode: 'dark',
	},
	typography: {
		fontFamily: 'Montserrat, sans-serif'
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				}
			}
		},
		MuiToggleButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					border: 'none',
					backgroundColor: 'black',
					color: 'rgb(220,220,220)',
					'&.Mui-selected': {
						//backgroundColor: 'black',
						opacity: 1,

					},
					'&.hover': {
						backgroundColor: 'black'
					}
				}
			}
		}
	}
})