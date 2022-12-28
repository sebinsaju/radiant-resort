import Header from '../components/header'
import Layout from '../components/layout'
import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
function MyApp({ Component, pageProps }) {

  return <div><Head>
    <title>Radiant Resort | Bangalore Resort for Day Outing | Bangalore resorts</title>
    <meta content="Radiant Resort Bangalore is located near Bannerghatta National Park and is the perfect weekend getaway from Bangalore. Book your vocational trip now." name="Description" /><meta content="website" property="og:type" /><meta content="Radiant Resort | Bangalore Resort for Day Outing | Bangalore resorts" property="og:title" /><meta content="https://www.radiantresort.com/" property="og:url" /><meta content="https://res.cloudinary.com/simplotel/image/upload/x_0,y_9,w_512,h_287,r_0,c_crop,q_80,fl_progressive/w_1366,c_fit,f_auto/radiant-resort-bangalore/Utsav_Lawn_e3mms1" property="og:image" /><meta content="Radiant Resort Bangalore Bangalore Utsav Lawn" property="og:image:alt" /><meta content="Radiant Resort Bangalore is located near Bannerghatta National Park and is the perfect weekend getaway from Bangalore. Book your vocational trip now." property="og:description" /><meta content="Bangalore Resort for Day Outing, Weekend Getaway Around Bangalore, Ayurveda treatment in bangalore" name="Keywords" />
    <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    <link rel="icon" href="/fav.png" />
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout></div>
}

export default MyApp
