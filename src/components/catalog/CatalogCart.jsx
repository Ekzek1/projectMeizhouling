import React, { useState } from 'react';
import style from './Catalog.module.css';

import CatalogSlider from './CatalogSlider';
import CatalogPrice from './CatalogPrice';
import CatalogForm from './CatalogForm';




const CatalogCart = ({title, sizesCount, priceCount}) => {

  

  const [price, setPrice] = useState (priceCount[0])
  const [size, setSize] = useState (sizesCount[0])
  const [priceHigh, setPriceHigh] = useState (70);

  const [modalActive, setModalActive] = useState(false)

  const fixedPrice = (size, price) => {
    setPrice(price);
    setPriceHigh(price * 2);
    setSize(size);
  }  

  return (
    <div className={style.cart__body}>
      <div className={style.cart__img}>
        <CatalogSlider/>
      </div>
      <div className={style.cart__info}>
        <h2 className={style.cart__h2}>{title}</h2>
        <span className={style.cart__sale}>скидка -50%</span>
        <div className={`${style.cart__price} ${style.price}`}>
          <span className={style.price__high}>{priceHigh} byn</span>
          <span className={style.price__low}>{price} byn</span>
        </div>
        <p className={style.cart__quantity}>Осталось 10 шт.</p>
        <CatalogPrice sizeActive={size} size = {sizesCount} price = {priceCount} func = {fixedPrice}/>
        <div className={style.cart__button}>
          <button className={style.cart__add} onClick={() => setModalActive(true)}>Заказать</button>
        </div>
        <CatalogForm active={modalActive} setActive={setModalActive} price = {price} size = {size} title = {title} />
      </div>
    </div>
  )
}

export default CatalogCart