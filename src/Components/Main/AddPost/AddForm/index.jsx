import React from "react";

import style from "./AddForm.module.css";

function AddForm(props) {
	return (
		<>
			<form action="" className={style.newPost}>
				<label className={style.label}>
          <p className={style.labelText}>Post title</p>
          <input type="text" name="title" className={style.input} />
        </label>
        <label className={style.label}>
          <p className={style.labelText}>Post content</p>
          <textarea className={style.input} name="description" cols="30" rows="10"></textarea>
        </label>
        <div className={style.buttons}>
          <button className={style.btn} type="submit">Publish</button>
          <button className={style.btn} type="reset">Cancel</button>
        </div>
			</form>
		</>
	);
}

export default AddForm;
