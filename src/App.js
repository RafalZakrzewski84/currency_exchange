/** @format */

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import TableComp from './Components/TableComp';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: '',
			currencyTable: null,
		};
		this.componentDidUpdate = this.componentDidUpdate.bind(this);
		this.setState = this.setState.bind(this);
		this.fetchHandler = this.fetchHandler.bind(this);
	}

	fetchHandler() {
		console.log('state ', this.state.keyword);
		let code = this.state.keyword;
		console.log('code', code);
		console.log(this);
		axios
			.get('http://api.nbp.pl/api/exchangerates/tables/A/')
			.then((response) => {
				const data = response.data[0].rates;
				console.log('axios resp', data);

				if (code !== '') {
					this.setState({
						currencyTable: data.find(
							(element) => element.code === code.toUpperCase()
						),
					});
				} else {
					this.setState({ currencyTable: data });
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.fetchHandler();
	}

	componentDidUpdate(_, prevState) {
		if (
			this.state.keyword.length >= 3 &&
			this.state.keyword.length < 4 &&
			this.state.keyword !== prevState.keyword
		) {
			this.fetchHandler();
		} else if (
			this.state.keyword === '' &&
			this.state.keyword !== prevState.keyword
		) {
			this.fetchHandler();
		}
		console.log(this.state.currencyTable);
		// console.log(this.state.currencyTable.length);
	}

	// this.props.currencyTable.map((el, i)=>{ reutrn <TableRow ...})
	render() {
		return (
			<div className="App">
				<Navbar />
				<Form setState={this.setState} />
				{/* this.state && coponent - waiting for data before rendering */}
				{this.state.currencyTable && (
					<TableComp
						currencyTable={
							this.state.currencyTable.length
								? this.state.currencyTable
								: [this.state.currencyTable]
						}
					/>
				)}
			</div>
		);
	}
}

export default App;
