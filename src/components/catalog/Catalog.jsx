import React from 'react';
import CatalogCart from './CatalogCart';

import style from './Catalog.module.css';
import '../assets/styles/App.css'

const Catalog = () => {
  return (
    <div className={style.catalog} id='catalog'>
      <div className={`${style.catalog__title} ${style.title}`}>
        <h1 className={style.title__h1}>Каталог</h1>
        <span className={style.line}></span>
      </div>           
      <div className='container container__catalog'>
        <div>
          <CatalogCart title = {'MEIZHOULING Одеяло шелковое'} sizesCount = {["150/200 - 1.5", "180/200 - 2", "200/220 - евро"]} priceCount={[70, 100, 200]}/>
        </div>
        <div>
          <CatalogCart title={'Шелковая подушка'} sizesCount = {["50/70", "70/70"]} priceCount={[50, 70]}/>
        </div>
      </div>
    </div>
  )
}

export default Catalog