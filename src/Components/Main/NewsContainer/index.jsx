import React from "react";
import NewsList from "./NewsList";

function NewsContainer(props) {
	return (
		<>
			<div className="newsContainer">
				<NewsList />
			</div>
		</>
	);
}
export default NewsContainer;
