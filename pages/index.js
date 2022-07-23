
import BannerSlider from '../components/banner-slider'
import BestRooms from '../components/best-rooms'
import Booking from '../components/booking'
import Experience from '../components/experience'
import HomeAbout from '../components/home-about'
import HomeFacilities from '../components/home-facilities'
import HomeGallery from '../components/home-gallery'
import LogoSlider from '../components/logo-slider'
import Quotation from '../components/quotation'
import TestimonialSection from '../components/testimonial-section'
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
        <HomeFacilities />
        <HomeGallery />
        <TestimonialSection />
      </div>
    </div>
  )
}
