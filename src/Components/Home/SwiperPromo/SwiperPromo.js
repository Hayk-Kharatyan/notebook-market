import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./SwiperPromo.css"
export default function SwiperPromo() {
  return (
    <section className='slider_promo'>
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true} pagination={{
                clickable: true,
            }} 
            navigation={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            modules={[Autoplay,Navigation, Pagination]}
            className="mySwiper">
            <SwiperSlide>

                <div className='imgdiv'>
                    <img width="1000px" height="600px" alt='sliderimg' src='./images/logos/promo.png'></img>
                </div>

            </SwiperSlide>
            <SwiperSlide>

                <div className='imgdiv'>
                    <img width="1000px" height="600px" alt='sliderimg' src='./images/logos/promo2.jpg'></img>
                </div>

            </SwiperSlide>
            <SwiperSlide>

                <div className='imgdiv'>
                    <img width="1000px" height="600px" alt='sliderimg' src='./images/logos/promo3.jpg'></img>
                </div>

            </SwiperSlide>

        </Swiper>
    </>
</section>
  )
}
