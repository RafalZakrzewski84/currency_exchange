/** @format */

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: '',
			currencyTable: true,
		};
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
		this.setState = this.setState.bind(this);
	}

	componentDidUpdate() {
		console.log(this.state.keyword);
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Form setState={this.setState} />
			</div>
		);
	}
}

export default App;
