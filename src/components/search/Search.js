import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Search.css';
import img from '../../image/search.svg';
import Country from '../country/Coutry';

const Search = (props) => {

	const [countries, setCountries] = useState([]);
	const getCountries = () => {
		axios.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				setCountries(response.data);
				console.log(response.data);
			})
	}

	useEffect(() => {
		getCountries()
	}, []);

	const [value, setValue] = useState('');

	const filtredCountries = countries.filter(elem => {
		return elem.name.toLowerCase().includes(value.toLowerCase())
	})

	return (
		<div className="container">
			<div className="search">
				<form className="search__form">
					<input
						type="text"
						placeholder=" Search in the country..."
						className="search__input"
						onChange={(event) => {
							setValue(event.target.value);
						}}
					/>
					<img src={img} alt="Img" className="search__img" />
				</form>
			</div>
			<div className="countries">
				{filtredCountries.map((elem, index) => {
					return <Country country={elem} key={index.toString()} />
				})}
			</div>
		</div>
	)
}

export default Search;