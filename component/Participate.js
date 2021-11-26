import { useState } from 'react'

import Image from 'next/image'
import spring from '../img/index_participate/tinified-5/participate_01.jpeg'
import summer from '../img/index_participate/tinified-5/participate_02.jpeg'
import fall from '../img/index_participate/tinified-5/participate_03.jpeg'
import winter from '../img/index_participate/tinified-5/participate_04.jpeg'

import { Box } from '@chakra-ui/react'

export default function home() {
    const [hoverSeason, setHoverseason] = useState(summer)
    return (
        <>
            <div className="py-5 bg-gray mt-5">
                <div className=" pt-5 position-relative">
                    <div className="container bg-gray ">
                        <div className="row ">
                            <div className="col-7 cursor-default py-5 ">
                                <div className="position-absolute h-100 py-5 top-0 start-0">
                                    <div
                                        className="ParticipateImg position-relative h-100"
                                        style={hoverSeason == spring ? { opacity: 1 } : { opacity: 0 }}
                                    >
                                        <Image
                                            src={spring}
                                            layout="fill"
                                            objectFit="cover"
                                            width={800}
                                            height={500}
                                            placeholder="blur"
                                            objectPosition="50% 40%"
                                        ></Image>
                                    </div>
                                </div>
                                <div className="position-absolute h-100 py-5 top-0 start-0">
                                    <div
                                        className="ParticipateImg position-relative h-100"
                                        style={hoverSeason == summer ? { opacity: 1 } : { opacity: 0 }}
                                    >
                                        <Image
                                            src={summer}
                                            layout="fill"
                                            objectFit="cover"
                                            width={800}
                                            height={500}
                                            placeholder="blur"
                                        ></Image>
                                    </div>
                                </div>
                                <div className="position-absolute h-100 py-5 top-0 start-0">
                                    <div
                                        className="ParticipateImg position-relative h-100"
                                        style={hoverSeason == fall ? { opacity: 1 } : { opacity: 0 }}
                                    >
                                        <Image
                                            src={fall}
                                            layout="fill"
                                            objectFit="cover"
                                            width={800}
                                            height={500}
                                            placeholder="blur"
                                            objectPosition="50% 85%"
                                        ></Image>
                                    </div>
                                </div>
                                <div className="position-absolute h-100 py-5 top-0 start-0">
                                    <div
                                        className="ParticipateImg position-relative h-100"
                                        style={hoverSeason == winter ? { opacity: 1 } : { opacity: 0 }}
                                    >
                                        <Image
                                            src={winter}
                                            layout="fill"
                                            objectFit="cover"
                                            width={800}
                                            height={500}
                                            placeholder="blur"
                                            objectPosition="50% 60%"
                                        ></Image>
                                    </div>
                                </div>
                            </div>

                            <div className="ParticipateText col-5 cursor-default bg-gray py-5">
                                <h2 className="fs-1 color-text-title mb-4">Participate</h2>
                                <h1 className="fs-1 color-text mb-4">參與四季的更迭</h1>
                                <p className="fs-5 color-text mb-4">
                                    根據季節的熱門活動主題，邀請你一同享受旅行中的每一個時刻。
                                </p>
                                <ul class="list-group list-group-flush justify-content-around">
                                    <li
                                        class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-2"
                                        onMouseOver={() => {
                                            setHoverseason(spring)
                                        }}
                                    >
                                        初春花海漫遊
                                    </li>
                                    <li
                                        class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-2"
                                        onMouseOver={() => {
                                            setHoverseason(summer)
                                        }}
                                    >
                                        豔夏水上活動
                                    </li>
                                    <li
                                        class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-2"
                                        onMouseOver={() => {
                                            setHoverseason(fall)
                                        }}
                                    >
                                        微秋星空露營
                                    </li>
                                    <li
                                        class="list-group-item color-text color-text-hover text-nowrap ps-4 pe-1 pb-2"
                                        onMouseOver={() => {
                                            setHoverseason(winter)
                                        }}
                                    >
                                        寒冬暖心溫泉
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
