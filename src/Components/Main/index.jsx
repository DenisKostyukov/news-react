import React from 'react';
import AddPost from './AddPost';

import style from './Main.module.css'
import NewsContainer from './NewsContainer';

function Main(props){
  return(
    <>
      <main className="content">
        <div className="news">
          <div className="container">
            <div className={style.newsInner}>
              <h1 className={style.newsTitle}>News</h1>
              <AddPost/>
              <NewsContainer />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Main