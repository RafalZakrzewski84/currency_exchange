/** @format */

//- 1. Znajdź komponent Table w MUI (Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper)
//- 2. Tworzycie komponent klasowy TableComponent
//- 3. Wyświetla tabelke z MUI (w środku komponentu jest tylko render())
//- a) pierwsza kolumna ma być podpisana "Currency code"
//- b) druga kolumna ma być podpisana "Currency name"
// c) pierwsza kolumna ma być podpisana "Exchange rate (PLN)"
// d) W TableBody, przy pomocy metody .map() wyświetlacie komponenty TableRow w pętli z informacjami o walucie: w pierwszej kolumnie kod waluty (np. USD), w drugiej pełną nazwe waluty, w trzeciej kurs waluty (currency.mid)
// Informacje o walutach przekazane do komponentu będą przez propsy, ale uwaga co przekazujemy (screen na slacku)

import React, { Component } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

class TableComp extends Component {
	render() {
		console.log('props', this.props);
		return (
			<div>
				<h1>Hello form Table</h1>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Currency Code</StyledTableCell>
								<StyledTableCell align="right">Currency name</StyledTableCell>
								<StyledTableCell align="right">
									Exchange rate (PLN)
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.currencyTable.map((row) => (
								<StyledTableRow key={row.code}>
									<StyledTableCell component="th" scope="row">
										{row.code}
									</StyledTableCell>
									<StyledTableCell align="right">
										{row.currency}
									</StyledTableCell>
									<StyledTableCell align="right">{row.mid}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

export default TableComp;
