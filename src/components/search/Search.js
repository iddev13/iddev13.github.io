import './Search.css';
import img from '../../image/search.svg';
import Country from '../country/Coutry';

const Search = (props) => {

	return (
		<div className="container">
			<div className="search">
				<form className="search__form">
					<input
						type="text"
						placeholder=" Search in the country..."
						className="search__input"
						onChange={(event) => {
							props.setValue(event.target.value);
						}}
					/>
					<img src={img} alt="Img" className="search__img" />
				</form>
			</div>
			<div className="countries">
				{props.filtredCountries.map((elem, index) => {
					return <Country country={elem} key={index.toString()} />
				})}
			</div>
		</div>
	)
}

export default Search;