import React from 'react';
import style from './Title.module.css'

const Title = () => {
  return (
    <div className={`${style.title } ${style.title__design}`}>
      <div className={style.title__layer}></div>
      <div className={style.title__container}>
        <div className={style.title__body}>
          <h1 className={style.title__text} >Ликвидация склада</h1>
          <h2 className={style.title__text}> MEIZHOULING шелковое одеяло</h2>
          <p className={style.title__sale}>Скидка до -50%</p>
          <div className={style.title__button}>
            <a href="#catalog" className={style.title__link}>Заказать</a>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Title

// <div className={style.title__layer1}></div>
// <div className={style.title__layer2}></div>