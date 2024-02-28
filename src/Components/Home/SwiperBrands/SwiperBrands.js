import React from 'react'
import "./SwiperBrands.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';

export default function SwiperBrands() {

    return (
        <section className='swiper_brands'>
            <h1 className='brand_header'>Our Brands</h1>
            <div className='container'>
                <Swiper autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }} modules={[Autoplay]} spaceBetween={30} slidesPerView={1} loop={true} className="mySwiper">
                    <SwiperSlide className='swiperSlide'>
                        <div className='brand_img'>
                            <img width="200px" height="120px" src='./images/brands/asus.png' alt='brands'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <div className='brand_img'>
                            <img width="200px" height="120px" src='./images/brands/msi.png' alt='brands'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <div className='brand_img'>
                            <img width="200px" height="120px" src='./images/brands/lenovo.png' alt='brands'></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperSlide'>
                        <div className='brand_img'>
                            <img width="200px" height="120px" src='./images/brands/hp.png' alt='brands'></img>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
