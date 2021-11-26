import Image from 'next/image'

import { Text, Flex, Box, AspectRatio } from '@chakra-ui/react'

export default function imageCard(props) {
    // console.log(props)
    // console.log({ children })
    return (
        <>
            <div className="imgCardBox d-flex flex-shrink-0">
                <div
                    className="imgBox position-relative rounded rounded-3 overflow-hidden"
                    // style={props.width ? { width: props.width } : null}
                >
                    <Image
                        src={props.src ? props.src : 'https://fakeimg.pl/250x375/'}
                        layout="fill"
                        objectFit="cover"
                        width={200}
                        height={300}
                        placeholder="blur"
                        // blurDataURL="https://fakeimg.pl/250x375/"
                        blurDataURL={typeof props.src == 'object' ? null : 'https://fakeimg.pl/250x375/'}
                    ></Image>
                </div>

                <Text className="fs-5 text-color" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                    {props.children}
                </Text>
            </div>
        </>
    )
}
