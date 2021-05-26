import React from 'react';
import Logo from './Logo';
import HeaderInput from './HeaderInput';

import style from './Header.module.css';

function Header(props){
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.headerInner}>
            <Logo />
            <HeaderInput />
          </div>
        </div>
      </header>
    </>
  )
}
export default Header