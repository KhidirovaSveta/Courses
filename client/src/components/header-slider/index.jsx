import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import bgImg from "../../img/slider_background.jpg"
import "./styles.scss";
import { Navigation } from "swiper";

const Slider = () => {
  return (
    <div>
       <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="homeSlider">
          <img src={bgImg} alt="" />
          <h1 className='MainText'> Get your <span className='yellowText'>Education</span> today! </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeSlider">
          <img src={bgImg} alt="" />
          <h1 className='MainText'> Get your <span className='yellowText'>Education</span> today! </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeSlider">
          <img src={bgImg} alt="" />
          <h1 className='MainText'> Get your <span className='yellowText'>Education</span> today! </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider