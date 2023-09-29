import React, { useEffect, useState } from 'react'
import style from '../catalog/Catalog.module.css';


const ReviewModal = ({active, setActive}) => {

  const [thank, setThank] = useState(true);

  const handlerButton = (e) => {
    e.preventDefault()
    setThank(false);
  }

  useEffect(() => {
    active ? setThank(true) : setThank(false)
  }
  , [active])

  return (
    <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
      <div className={active ? `${style.modal__content} ${style.active}` : style.modal__content} onClick={e => e.stopPropagation()}>   
      {thank ? 
        <>
          <div className={style.modal__info}>
            <h2 className={style.modal__title}>Оставьте отзыв</h2>
          </div>
          <form action="#" className={style.form}>
            <div className={style.form__input_all}>
              <input type="text" name='name' placeholder='Введите имя' required className={style.form__input}/>
              <input type="text" name='name' placeholder='Введите сообщение' required className={style.form__input}/>
              <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            </div>
            <button className={style.form__button} onClick= {(e) => handlerButton(e)} >Отправить отзыв</button>
          </form>
        </>
        : <h2 className={style.modal__title}>Ваш отзыв был отправлен</h2>
      }
      </div>
    </div>
    
  )
}

export default ReviewModal