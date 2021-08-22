import { useEffect , useState } from 'react';
import './PokShow.css'
import PokShowDetails from './pokShowDetails'
function PokShow (props) {
	const [pokDetails, setMoreInfoFun] = useState();
	const [clicked, setClicked] = useState(false)

	useEffect(() => {
		fetch (props.data.url)
		.then(res => res.json())
		.then (data => {
			setMoreInfoFun(data)
		})
	});

	return (
		<div className="cardName">
		<h1>{props.data.name}</h1>
		{clicked?<PokShowDetails data={pokDetails}/>: <></>}
		<button className="buttonName" id={props.id} onClick={()=> setClicked(!clicked)}>more</button>
		</div>
	);
}

export default PokShow;