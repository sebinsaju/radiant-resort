import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { instance } from "../../axios";
const BannerSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("banners").then((res)=>{setData(res.data.banners)})
  }, []);
  const DATA = [
    { image: "/banner/banner-2.jpg", text: "" },
    { image: "/gallery/5.jpg", text: "" },
    { image: "/banner/banner-1.jpg", text: "" },
    { image: "/gallery/7.jpg", text: "" },
    { image: "/gallery/27.jpg", text: "" },
    { image: "/banner/banner-4.jpg", text: "" },
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
    <div>
        {console.log(data)}
      <Slider {...settings}>
        {data.map((slide, index) => {
          return (
            <div className="banner-slide" key={index}>
              <img src={slide.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
