/** @format */

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import axios from 'axios';

// 1. Funkcja fetchujaca dane przy pomocy axiosa: fetchData()
// W tej funkcji z endpointu api.nbp.pl/api/exchangerates/tables/a ściągacie dane (axios.get)
// 2. Wrzucacie dane do stanu
// Jeżeli this.state.keyword !== "" to szukacie odpowiedniej waluty w danych z axiosa i wrzucacie ten obiekt do stanu (response.data[0].rates.find()) (keyword === el.code)
// Jeżeli keyword === '' to do stanu wrzucacie całą liste obiektów rates

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

	// fetchData() {
	// 	axios
	// 		.get('http://api.nbp.pl/api/exchangerates/tables/A/')
	// 		.then(function (response) {
	// 			if(this.state.keyword !== '') {
	// 				this.setState({
	// 					keyword: this.state.keyword,
	// 					currencyTable: response.data[0].rates.find((e) => e.code ===)
	// 				})
	// 			}
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});
	// }

	fetchHandler() {
		console.log('state ', this.state.keyword);
		let code = this.state.keyword;
		console.log('code', code);
		console.log(this);
		axios
			.get('http://api.nbp.pl/api/exchangerates/tables/A/')
			.then((response) => {
				const data = response.data[0].rates;
				console.log(data);

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

	componentDidUpdate() {
		// console.log(this.state.keyword);
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Form setState={this.setState} />
				<button onClick={this.fetchHandler}>Fetch</button>
			</div>
		);
	}
}

export default App;
