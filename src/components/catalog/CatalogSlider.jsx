import React, {useState, useEffect, useCallback} from 'react';

import { ArrowLeftOutlined } from '@mui/icons-material';
import { ArrowRightOutlined } from '@mui/icons-material';

import { motion, AnimatePresence, useVelocity } from 'framer-motion';

import photo1 from '../assets/img/logo.png';
import photo2 from '../assets/img/2.webp';
import photo3 from '../assets/img/1.webp';

import style from './Catalog.module.css'

const dataSlider = [
  {
    img: photo1
  },
  {
    img: photo2
  },
  {
    img: photo3
  }
]

const swipeSpeed = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
}

const CatalogSlider = () => {

  const[slider, setSliderState] = useState(0);


  const handleSlider = useCallback(
    (side) => {
      const sliders = dataSlider.length - 1;
      if(side == 'left'){
        slider - 1 >= 0 ? setSliderState(slider - 1) : 
          setSliderState(sliders);
      } else {
        const numberSlide = slider + 1;
        numberSlide > sliders ? setSliderState(0) : 
          setSliderState(numberSlide)
      }
    }, [slider]
  );

  useEffect(() =>{
    const interval = setInterval(() => {
      handleSlider('right')
    },4000)
    return () => clearInterval(interval);
  }, [slider,handleSlider]);

  return (
    <div className={`${style.wrapper} ${style.slider__container}`}>
      <ArrowLeftOutlined className={style.slider__left} onClick = {() => handleSlider('left')} ></ArrowLeftOutlined>
        <div className={style.slider}>
          <div>
            <AnimatePresence>
              <motion.img  
                className={style.slider__img}
                src={dataSlider[slider].img}
                key={dataSlider[slider].img}
                initial = {{ opacity: 0}}
                animate = {{ opacity: 1}}
                drag='x'
                dragConstraints={{left: 0, right: 0}}
                onDragEnd={
                  (e, {offset, velocity}) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < swipeSpeed) {
                      handleSlider('right');
                    }else if (swipe > swipeSpeed){
                      handleSlider('left');
                    }
                  }
                }
              >                 
              </motion.img>
            </AnimatePresence>
          </div>
        </div>
      <ArrowRightOutlined className={style.slider__right} onClick = {() => handleSlider('right')}></ArrowRightOutlined>
    </div>
  )
}

export default CatalogSlider