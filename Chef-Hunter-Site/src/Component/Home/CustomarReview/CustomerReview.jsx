import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CustomerReview.css";

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">James B. Lucinda D.!</h2>
              <p>
                "I tried the spicy tuna roll and it was incredible! The flavors
                blended together perfectly and the heat from the spice added
                just the right amount of kick. I would definitely recommend this
                to anyone who loves sushi."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Lucinda D.!</h2>
              <p>
                The chicken parmesan was disappointing. The chicken was dry and
                the sauce lacked flavor. The dish was also quite greasy. I would
                not order this again."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Stive jam!</h2>
              <p>
                "The steak was cooked to perfection and had a beautiful char on
                the outside. It was so tender, I could cut it with a butter
                knife. The accompanying mashed potatoes were also creamy and
                delicious."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Albart jason!</h2>
              <p>
                "The vegan burger was a pleasant surprise. The patty was made of
                black beans and had a nice texture. The toppings were fresh and
                added a great pop of flavor. Even as a non-vegan, I would order
                this again."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Josep Aflet!</h2>
              <p>
                "The pho was incredibly flavorful and the broth was rich and
                satisfying. The noodles were cooked perfectly and the meat was
                tender. This is the best pho I've had in a long time."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Refcha naimer!</h2>
              <p>
                "The shrimp scampi was disappointing. The shrimp were overcooked
                and rubbery, and the pasta was bland. The dish could have used
                more garlic and seasoning. I would not recommend this."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">James B. Lucinda D.!</h2>
              <p>
                James B. “Was so impressed I had to find out more and tell my
                friends! Last week we attended a fabulous pre-wedding afternoon
                party”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">James B. Lucinda D.!</h2>
              <p>
                James B. “Was so impressed I had to find out more and tell my
                friends! Last week we attended a fabulous pre-wedding afternoon
                party”
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 cart-review shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">James B. Lucinda D.!</h2>
              <p>
                James B. “Was so impressed I had to find out more and tell my
                friends! Last week we attended a fabulous pre-wedding afternoon
                party”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
