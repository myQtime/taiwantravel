import ImgCard from '../component/ImgCard.js'
import CardSwiper1 from '../component/cardSwiper1.js'
import CardSwiper2 from '../component/cardSwiper2.js'

import { Box } from '@chakra-ui/react'

export default function home() {
    return (
        <>
            <div className="container py-5">
                <div className="row ">
                    <div className="col-7 cursor-default pt-5">
                        <h2 className="fs-1 color-text-title mb-4">Explore</h2>
                        <h1 className="fs-1 color-text mb-4">探索台灣每個角落</h1>
                        <p className="fs-5 color-text">
                            台灣擁有高山峽谷及四面環海地理特性，因此充滿各種自然景致等待人們發現，而各縣市有其特色文化與在地必嚐美食，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文深度旅行，都能在台灣這片土地上踏尋。
                        </p>
                    </div>
                    {/*▼▼▼ display none ▼▼▼*/}
                    <div className="col-5 d-flex pt-5 d-none">
                        <ImgCard>55688</ImgCard>
                        <ImgCard src="https://fakeimg.pl/250x375/?text=Hello">666</ImgCard>
                        <ImgCard src="https://fakeimg.pl/250x375/?text=Hello">65566</ImgCard>
                    </div>
                    {/*▲▲▲ display none ▲▲▲*/}
                    <div className="col-5 pt-5">
                        <CardSwiper1 />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 pt-3">
                        <ul class="list-group list-group-flush justify-content-around h-100">
                            <li class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-3">
                                都市文情：北台灣
                            </li>
                            <li class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-3">
                                休閒樂活：中台灣
                            </li>
                            <li class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-3">
                                人情小吃：南台灣
                            </li>
                            <li class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-3">
                                自然生態：東台灣
                            </li>
                            <li class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-3">
                                小島風情：離島地區
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 d-lg-none"></div>
                    <div className="col-7 col-lg-9 pt-3">
                        <CardSwiper2 />
                    </div>
                </div>
            </div>
        </>
    )
}
