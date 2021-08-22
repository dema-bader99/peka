import React, { useEffect, useState } from 'react'
import PokShow from './pokShow'
export default function App() {
	const [pokList, setPokList] = useState([]);
	// const [pokDetails, setMoreInfoFun] = useState([]);


	useEffect(() => {
		const urlPok = "https://pokeapi.co/api/v2/pokemon?limit=100";
		fetch (urlPok)
		.then(res => res.json())
		.then (data => {
			setPokList(data.results);
		})
	},[]);


		return (
			<div>
				<div className="showName">
				{pokList.map((pokemon, index) => {
						return(
							<div>
							<PokShow id={index} data={pokemon}/>
							</div>
						)
					})}

				</div>
			</div>
  		);

}

