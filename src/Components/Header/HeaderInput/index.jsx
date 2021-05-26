import React from 'react';
import style from './HeaderInput.module.css';

function HeaderInput(props){
  return(
    <>
      <input type="text" name="search" id={style.search} placeholder="Search an article" />
    </>
  )
}
export default HeaderInput;