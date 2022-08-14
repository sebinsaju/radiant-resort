import React, { useEffect, useState } from "react";
import Testimonial from "../testimonial";
import style from "./Testimonial.module.scss";
import Slider from "react-slick";
import { Data } from "./Data";
import { instance } from "../../axios";

const TestimonialSection = () => {
  const[data,setData] = useState("");
  useEffect(()=>{
    instance.get('testimonials').then((res)=>{setData(res.data.testimonials)})
  },[])
  var settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    responsive: [
        {
             breakpoint: 767 ,
             settings:{
                slidesToShow:1,
                slidesToScroll:1
             }
        }
    ],
  };
  return (
    <div className="container container-fluid pt-5 pb-5">
      <h3 className="text-center title-big mb-5">Guest Reviews</h3>
      <div className="row">
        <Slider {...settings}>
          {data && data.map((item,index) => {
            return (
              <div className="p-3" key={index}>
                <Testimonial details={item}/>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
