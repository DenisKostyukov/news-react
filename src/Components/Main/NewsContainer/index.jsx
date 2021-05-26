import React,{useState} from "react";
import NewsList from "./NewsList";
import data from './data'

function NewsContainer(props) {
	const [number, setNumber] = useState(null);
	setNumber(32)
	console.log(number)
	return (
		<>
			<div className="newsContainer">
				<NewsList  />
			</div>
		</>
	);
}
export default NewsContainer;
