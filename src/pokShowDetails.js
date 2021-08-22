function PokShowDetails ({data}) {
	return (
		<div className='Pokcard'>
			 <img className='imageDes' src={data.sprites.other.dream_world.front_default} alt={data.name}/>
			 <p>Hp: {data.stats[0].base_stat}</p>
			 <p>Hight: {data.height}</p>
			 <p>Wight: {data.weight}</p>
			 <p>Attack: {data.stats[1].base_stat}</p>
		</div>
	);
}

export default PokShowDetails;