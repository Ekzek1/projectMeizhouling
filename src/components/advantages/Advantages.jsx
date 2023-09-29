import React from 'react';
import style from './Advantages.module.css';
import stl from '../catalog/Catalog.module.css'
import '../assets/styles/App.css'

const Advantages = () => {



  return (
    <div className={style.advantages} id='advant'>
      <div className='container'>
        <div className={`${stl.catalog__title} ${stl.title}`}>
            <h1 className={stl.title__h1}>наши преимущества</h1>
            <span className={stl.line}></span>
        </div>
        <div className = {style.advantages__box}>
          <div className={style.advantages__item}>
            <span></span>
            <p className={style.advantages__title}>Без Предоплаты</p>
            <p>Отправка наложенным платежом</p>
          </div>
          <div className={style.advantages__item}>
            <span></span>
            <p className={style.advantages__title}>Быстрая доставка</p>
            <p>Доставка курьером по Минску или почтой по Беларуси в течение 1 - 3 дней.</p>
          </div>
          <div className={style.advantages__item}>
            <span></span>
            <p className={style.advantages__title}>ОБСЛУЖИВАНИЕ</p>
            <p>За все время обслуживания более 1000 выполненных заказов</p>
          </div>
          <div className={style.advantages__item}>
            <span></span>
            <p className={style.advantages__title}>НАГРАДЫ ЗА РАБОТУ</p>
            <p>Наградой за работу являются повторные заказы наших клиентов</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages