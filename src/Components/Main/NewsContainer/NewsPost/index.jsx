import React from "react";

import style from "./NewsPost.module.css";

function NewsPost(props) {
	return (
		<>
			<article className={`${style.postWrapper} ${style.background}`}>
				<div className={style.postHeader}>
					<h3 className={style.postTitle}>Lorem ipsum dolor sit.</h3>
					<p className={style.date}>01.01.2021</p>
				</div>
				<div className={style.postContent}>
					<p className={style.description}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
						ratione natus soluta omnis saepe possimus minus et doloribus
						perspiciatis deleniti?
					</p>
				</div>
			</article>
		</>
	);
}

export default NewsPost;
