import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import '../node_modules/swiper/swiper-bundle.min.css'

// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

import ImgCard from '../component/ImgCard.js'

import enjoy1 from '../img/index_enjoy/tinified-4/enjoy_01.jpeg'
import enjoy2 from '../img/index_enjoy/tinified-4/enjoy_02.jpeg'
import enjoy3 from '../img/index_enjoy/tinified-4/enjoy_03.jpeg'
import enjoy4 from '../img/index_enjoy/tinified-4/enjoy_04.jpeg'
import enjoy5 from '../img/index_enjoy/tinified-4/enjoy_05.jpeg'
import enjoy6 from '../img/index_enjoy/tinified-4/enjoy_06.jpeg'
import enjoy7 from '../img/index_enjoy/tinified-4/enjoy_07.jpeg'
import enjoy8 from '../img/index_enjoy/tinified-4/enjoy_08.jpeg'

export default function App() {
    const [imageData, setImageData] = useState([])

    useEffect(() => {
        let tempImg = [
            { src: enjoy1 },
            { src: enjoy2 },
            { src: enjoy3 },
            { src: enjoy4 },
            { src: enjoy5 },
            { src: enjoy6 },
            { src: enjoy7 },
            { src: enjoy8 },
            { src: enjoy1 },
            { src: enjoy2 },
            { src: enjoy3 },
            { src: enjoy4 },
            { src: enjoy5 },
            { src: enjoy6 },
            { src: enjoy7 },
            { src: enjoy8 },
        ]
        setImageData(tempImg)
    }, [])

    return (
        <>
            <div style={{ width: '110%', marginLeft: '-5%' }}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        waitForTransition: true,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    slidesPerView={4}
                    speed={1000}
                    slidesPerGroup={1}
                    spaceBetween={0}
                    className="mySwiper3 "
                    breakpoints={{
                        576: { slidesPerView: 4 },
                        768: { slidesPerView: 5 },
                        992: { slidesPerView: 7 },
                        1440: { slidesPerView: 13 },
                    }}
                >
                    {imageData
                        ? imageData.map((item) => (
                              <SwiperSlide>
                                  <ImgCard src={item.src}>{item.name ? item.name : null}</ImgCard>
                              </SwiperSlide>
                          ))
                        : null}
                </Swiper>
            </div>
        </>
    )
}
