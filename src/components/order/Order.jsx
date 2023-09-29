import React from 'react';
import stl from '../catalog/Catalog.module.css';
import style from './Order.module.css';
import '../assets/styles/App.css'

const Order = () => {
  return (
    <div className={style.order} id='order'>
      <div className="container">
        <div className={`${stl.catalog__title} ${stl.title}`}>
          <h1 className={`${stl.title__h1} ${style.title_color}`}>как заказать </h1>
          <span className={stl.line}></span>
        </div>
        <div className={style.order__items}>
          <div className={style.order__item}>
            <span></span>
            <p className={style.order__p}>Вы оформляете заказ на нашем сайте</p>
          </div>
          <div className={style.order__item}>
            <span></span>
            <p className={style.order__p}>Менеджер перезвонит вам для уточнения деталей заказа</p>
          </div>
          <div className={style.order__item}>
            <span></span>
            <p className={style.order__p}>Доставка курьером по Минску или почтой по Беларуси в течение 1 - 3 дней.</p>
          </div>
          <div className={style.order__item}>
            <span></span>
            <p className={style.order__p}>Оплата заказов осуществляется только по факту получения товара.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order