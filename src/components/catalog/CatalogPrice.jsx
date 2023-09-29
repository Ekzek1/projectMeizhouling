import React, { useState } from 'react';
import style from './Catalog.module.css'

const CatalogPrice = ({size, price, func, sizeActive}) => {

  return (
    <div className={style.catalog__price}>
      <ul className={style.catalog__ul} >
        { size.length ?
          size.map((item,i) => (
            <li 
              key = {i} 
              className= {sizeActive == size[i] ? `${style.catalog__li} ${style.catalog__active}` : style.catalog__li } 
              onClick = {() => func(size[i], price[i])}
            > {item} </li>
          )):
          <></>
        }
      </ul>
    </div>
  )
}

export default CatalogPrice