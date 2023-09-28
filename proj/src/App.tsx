import { useState } from 'react'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./themes";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";

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
