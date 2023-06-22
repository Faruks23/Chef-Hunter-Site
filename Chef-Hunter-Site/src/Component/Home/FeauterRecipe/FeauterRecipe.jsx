import React from 'react';
import './FeauterRecipe.css'
 import { Swiper, SwiperSlide } from "swiper/react";

 // Import Swiper styles
 import "swiper/css";
 import "swiper/css/pagination";
 import "swiper/css/navigation";
 import slide1 from '../../../assets/_3317128d-2725-4aa4-84a7-b7149dca8089.jfif'


 // import required modules
 import { Autoplay, Pagination,FreeMode, Navigation } from "swiper";
const FeauterRecipe
  = () => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/chicken-quesadilla-index-64515c8e98e28.jpg?crop=0.565xw:1.00xh;0.181xw,0&resize=360:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="fu-img"
            src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/service-4-1170x658.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/shrimp-scampi-index-644c0ade03d01.jpg?crop=0.500xw:1.00xh;0.254xw,0&resize=360:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/delish-230103-copycatpanerachickenpanini-046-ls-1673478309.jpg?crop=0.668xw:1.00xh;0.114xw,0&resize=360:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/nashville-hot-chicken-thumbnail-6450142202333.jpg?crop=0.565xw:1.00xh;0.189xw,0&resize=360:*"
            alt=""
          />
        </SwiperSlide>
    
        <SwiperSlide>
          {" "}
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/3-image-memorial-day-645273f7bffcb.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=360:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/loaded-campfire-nachos-6442b78126360.jpg?crop=0.601xw:0.901xh;0.236xw,0.0841xh&resize=360:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/one-pan-chicken-tomato-gnocchi-vertical-64345a1325438.jpg?crop=1.00xw:0.716xh;0,0.158xh&resize=360:*"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="fu-img"
            src="https://hips.hearstapps.com/hmg-prod/images/turkey-zucchini-enchilada-casserole1-1658265683.jpg?crop=0.681xw:1.00xh;0.160xw,0&resize=360:*"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeauterRecipe;