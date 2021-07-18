import './Country.css';

const Country = (props) => {
	return (
		<section className="country">
			<div className="country__wrapper">
				<div className="country__image">
					<img src={props.country.flag} alt="Flag" />
				</div>
				<div className="country__description">
					<h3 className="country__name">{props.country.name}</h3>
					<p>Capital: {props.country.capital}</p>
					<p>Region: {props.country.region}</p>
					<p>Population: {props.country.population}</p>
					<p>Number code: +{props.country.numericCode}</p>
				</div>
			</div>
		</section>
	)
}

export default Country;
