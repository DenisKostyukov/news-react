import React from 'react';
import AddForm from './AddForm';

import style from './AddPost.module.css';

function AddPost(props){
  return(
    <>
      <div className={`${style.background} ${style.addPost}`}>
        <h3 className={style.addPostTitle}>Add new post</h3>
        <AddForm />
      </div>
    </>
  )
}
export default AddPost