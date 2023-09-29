import React, { useEffect, useState } from 'react'
import style from './Catalog.module.css';
import InputMask from 'react-input-mask';


const CatalogForm = ({active, setActive, price, size, title}) => {

  let data = {
    'цена': price,
    'размер': size,
    'товар': title,
  }

  const [valueName, setValueName] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [checked , setChecked] = useState(true);
  const [thank, setThank] = useState(true);
  const [error, setError] = useState(false);

  const handlerButton = (e) => {
    e.preventDefault()
    let phone =  valuePhone.slice(1).match(/\d+/g);

    if(valueName.length >= 2 && phone.length == 5){
      data.name = valueName
      data.phone = valuePhone
      setValueName('');
      setValuePhone('');
      setThank(false);
      setError(false);
      console.log(data);
    }else{
      setError(true)
    }
  }

  return (
    <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
      <div className={active ? `${style.modal__content} ${style.active}` : style.modal__content} onClick={e => e.stopPropagation()}>   
      {thank ? 
        <>
          <div className={style.modal__info}>
            <h2 className={style.modal__title}>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
          </div>
          <form action="#" className={style.form}>
            <div className={style.form__input_all}>
              <input type="text" name='name' placeholder='Ваше имя' required minLength={2} maxLength={25} className={style.form__input} value = {valueName} onChange={(e) => setValueName(e.target.value)}/>
              <InputMask mask="+375 99 999 99 99" type="tel" name='phone' placeholder='Ваш телефон' required className={style.form__input}
              value = {valuePhone} onChange={(e) => setValuePhone(e.target.value)} />
            </div>
            {error 
                ? 
                  <span style={{color: 'red'}}>Проверьте введённые данные</span>
                : 
                  <></>
              }
            <button className={style.form__button} onClick= {(e) => handlerButton(e)} >Заказать</button>
            <label>                        
              <input
                type='checkbox'
                checked={checked}
                onChange={ () => setChecked(!checked)}
              />
              Я согласен с политикой конфиденциальности и пользовательским соглашением   
            </label>
          </form>
        </>
        : <h2 className={style.modal__title}>Ваш заказ оформлен</h2>
      }
      </div>
    </div>
    
  )
}

export default CatalogForm

