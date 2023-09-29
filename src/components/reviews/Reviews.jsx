import React, {useState} from 'react';
import style from './Reviews.module.css';
import stl from '../catalog/Catalog.module.css';
import ReviewsSlider from './ReviewsSlider';
import ReviewModal from './ReviewModal';

const Reviews = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={style.reviews} id='reviews'>
      <div className=''>
        <div className={style.reviews__body}>
          <div className={`${stl.catalog__title} ${stl.title}`}>
              <h1 className={`${stl.title__h1} ${style.title_color}`}>Отзывы клиентов</h1>
              <span className={stl.line}></span>
          </div>
          <ReviewsSlider/>
          <div className={style.reviews__button}>
            <button className={style.reviews__add} onClick={() => setModalActive(true)}>Оставить отзыв</button>
          </div>
          <ReviewModal active={modalActive} setActive={setModalActive}/>
        </div>
      </div>
    </div>
  )
}

export default Reviews