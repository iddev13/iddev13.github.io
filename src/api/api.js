import * as axios from "axios";

const instance = axios.create({
	withCredential: true,
	baseURL: 'https://restcountries.eu/rest/v2/all',
});

export const getCountriesData = () => {
	return instance.get()
		.then(response => {
			// console.log(response.data);
			return response.data
		})
}