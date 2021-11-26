import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import '../node_modules/swiper/swiper-bundle.min.css'

// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

import ImgCard from '../component/ImgCard.js'

export default function cardSwiper1() {
    const [imageData, setImageData] = useState([])

    useEffect(() => {
        let tempImg = [
            { src: 'https://www.travel.taipei/image/63327', name: '大佳碼頭' },
            { src: 'https://www.travel.taipei/image/63334', name: '景美溪河濱自行車道' },
            { src: 'https://www.travel.taipei/image/63378', name: '陽明山冷水坑' },
            { src: 'https://www.travel.taipei/image/63400', name: '新北投溫泉區' },
            { src: 'https://www.travel.taipei/image/63485', name: '國立臺灣科學教育館' },
        ]
        setImageData(tempImg)
    }, [])

    return (
        <>
            <div style={{ width: '100%' }}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{
                        delay: 2000,
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
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper2"
                    breakpoints={{
                        576: { slidesPerView: 4 },
                        768: { slidesPerView: 5 },
                        992: { slidesPerView: 7 },
                        1440: { slidesPerView: 13 },
                    }}
                >
                    {/* <SwiperSlide>
                        <ImgCard src={url}>台北北投溫泉館</ImgCard>
                    </SwiperSlide> */}

                    {imageData
                        ? imageData.map((item) => (
                              <SwiperSlide>
                                  <ImgCard src={item.src}>{item.name}</ImgCard>
                              </SwiperSlide>
                          ))
                        : null}
                </Swiper>
            </div>
        </>
    )
}
