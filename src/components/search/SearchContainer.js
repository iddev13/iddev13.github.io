import React, { useState, useEffect } from 'react';
import { getCountriesData } from '../../api/api';
import Search from "./Search"


const SearchContainer = () => {

	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getCountriesData()
			.then(data => {
				setCountries(data)
			})
	}, []);

	const [value, setValue] = useState('');

	const filtredCountries = countries.filter(elem => {
		return elem.name.toLowerCase().includes(value.toLowerCase())
	})

	return (
		<>
			<Search
				setValue={setValue}
				filtredCountries={filtredCountries}
			/>
		</>
	)
}

export default SearchContainer;