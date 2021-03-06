import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import BannerSwiper from '../component/bannerSwiper'
import Explore from '../component/Explore'
import Participate from '../component/Participate'
import Enjoy from '../component/Enjoy'
import Subscribe from '../component/Subscribe'
import Footer from '../component/Footer'

export default function home() {
    return (
        <div className="overflow-hidden">
            <Head>
                <title>TRAVEL TAIWAN</title>
                <meta name="description" content="TRAVEL TAIWAN" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <BannerSwiper />
            <Explore />
            <Participate />
            <Enjoy />
            <Subscribe />
            <Footer />
        </div>
    )
}
