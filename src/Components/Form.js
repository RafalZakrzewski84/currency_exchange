/** @format */
// komponent klasowy
// wystylowany z mui
// znajdź w internecie jak odebrać propsy w komponencie klasowym (constructor, super)
// propsami będzie dostawał funkcję aktualizującą stan z App.js
// JSX:
// Typography z textem Currency name
// TextField z handlerem onChange

// stwórz funkcje handler w klasie która będzie przekazana do onChange dla text field
// w tym handlerze ma być aktulizowany stan z App.js

import React, { Component } from 'react';
import { Box, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

export class Form extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props);

		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(e) {
		// console.log(e.target.value);
		let eValue = e.target.value;
		this.props.setState({ keyword: eValue });
	}

	render() {
		return (
			<Box sx={{ width: '100%', maxWidth: 500 }}>
				<Typography variant="h4" gutterBottom component="div">
					Currency name
				</Typography>
				<TextField
					onChange={this.onChangeHandler}
					id="outlined-basic"
					placeholder="Placeholder"
					variant="outlined"
				/>
			</Box>
		);
	}
}

export default Form;
