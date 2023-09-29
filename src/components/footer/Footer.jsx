import React from 'react';
import style from './Footer.module.css';
import '../assets/styles/App.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footer__body}>
            <p className={style.footer__text}>
              Время работы колл-центра: пн-вс 09:00 - 21:00
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer