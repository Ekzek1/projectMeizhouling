import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__body}>
        <div className={style.header__nav}>
            <ul>
              <li className={style.header__nav_li}>
                <a href="#catalog">Каталог</a>
               </li>
              <li className={style.header__nav_li}>
                <a href="#reviews">Отзывы</a>
              </li>
              <li className={style.header__nav_li}>
                <a href="#order">как заказать</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header