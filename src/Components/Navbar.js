/** @format */

import React, { Component } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Typography
							variant="h1"
							align="center"
							sx={{ flexGrow: 1, fontSize: '2rem', fontFamily: 'Roboto' }}>
							Currency Exchange
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		);
	}
}

export default Navbar;
