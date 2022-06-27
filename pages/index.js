
import BannerSlider from '../components/banner-slider'
import BestRooms from '../components/best-rooms'
import Booking from '../components/booking'
import Experience from '../components/experience'
import HomeAbout from '../components/home-about'
import LogoSlider from '../components/logo-slider'
import Quotation from '../components/quotation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className='main'>
        <BannerSlider />
        <HomeAbout />
        <BestRooms />
        {/* <Experience /> */}
        <Quotation />
        {/* <LogoSlider /> */}
      </div>
    </div>
  )
}
