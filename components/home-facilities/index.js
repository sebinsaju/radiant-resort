import React from 'react'
import Slider from 'react-slick';

const HomeFacilities = () => {
    const DATA = [
        { image: "/facilities/bar.jpg"},
        { image: "/facilities/spa.jpg" },
        { image: "/facilities/pool.jpg"},
        { image: "/facilities/play.jpg"},
        { image: "/gallery/21.jpg"},
        { image: "/gallery/7.jpg"},
        { image: "/gallery/10.jpg"},
        { image: "/gallery/27.jpg"},
    ];
    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
       <div className='facility-wrapper'>
         <div className='container py-lg-5 py-sm-4'>
            <div className='row'>
                <div className='col-md-6 col-sm-12 py-5'>
                    <h3 className='title-big'>Facilities at Radiant Resort Bangalore</h3>
                    <p>Your vacation is incomplete if you did not laze around just gazing at nature. Radiant Resort Bangalore provides the best rooms and wooden houses right in the lap of nature. Choose from our Standard, Deluxe and Club rooms or enjoy superior hospitality in our spacious and elegant Suites. The resort also has Wooden Houses that are surrounded by lush greenery.</p>
                </div>
                <div className='col-md-6 col-sm-12 py-5'>
                    <div className='facility-slider'><Slider {...settings}>
                        {DATA.map((slide, index) => {
                            return <div className='banner-slide' key={index}><img src={slide.image} /></div>
                        })}
                    </Slider></div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default HomeFacilities;