import React, { useRef, useState } from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import '../node_modules/swiper/swiper-bundle.min.css'

// import Swiper core and required modules
import { Autoplay, Pagination, EffectFade } from 'swiper'

import banner1 from '../img/banner/banner1.jpg'
import banner2 from '../img/banner/banner2.jpg'
import banner3 from '../img/banner/banner3.jpg'
import banner4 from '../img/banner/banner4.jpg'
import banner5 from '../img/banner/banner5.jpg'
import banner6 from '../img/banner/banner6.jpg'

import SerchBar from './serchBar'

export default function App() {
    return (
        <>
            <div className="banner position-relative">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    effect={'fade'}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bannerImage position-relative d-flex justifu-contene-center">
                            <Image
                                src={banner1}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                width={1440}
                                height={800}
                                placeholder="blur"
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bannerImage position-relative d-flex justifu-contene-center">
                            <Image
                                src={banner2}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                width={1440}
                                height={800}
                                placeholder="blur"
                                priority={true}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bannerImage position-relative d-flex justifu-contene-center">
                            <Image
                                src={banner3}
                                layout="fill"
                                objectFit="cover"
                                quality={50}
                                width={1440}
                                height={800}
                                placeholder="blur"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bannerImage position-relative d-flex justifu-contene-center">
                            <Image
                                src={banner4}
                                layout="fill"
                                objectFit="cover"
                                quality={50}
                                width={1440}
                                height={800}
                                placeholder="blur"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bannerImage position-relative d-flex justifu-contene-center">
                            <Image
                                src={banner5}
                                layout="fill"
                                objectFit="cover"
                                quality={50}
                                width={1440}
                                height={800}
                                placeholder="blur"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bannerImage position-relative d-flex justifu-contene-center">
                            <Image
                                src={banner6}
                                layout="fill"
                                objectFit="cover"
                                quality={50}
                                width={1440}
                                height={800}
                                placeholder="blur"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <SerchBar />
            </div>
        </>
    )
}
