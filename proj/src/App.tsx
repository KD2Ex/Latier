import { useState } from 'react'
import {CssBaseline, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import './styles.css'
import {responsiveProperty} from "@mui/material/styles/cssUtils";
import {theme} from "./themes";

function App() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage/>
		}
	])


	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<RouterProvider router={router} />

		</ThemeProvider>
	)
}

export default App
