import Link from 'next/link';
import React from 'react'
const Packages = () => {
    const DATA = [
        {
            title: "Buffet Lunch Offer", image: "/package/packages-1.jpg", desc: "Sip, snack and enjoy mouth-watering luncheon in buffet style with our exclusive Buffet Lunch Offer at the best rate!", link: "/package/buffet-lunch"
        },
        {
            title: "Exclusive Breakfast & Lunch Buffet Offer", image: "/package/packages-2.jpg", desc: "Indulge in varieties of delicious cuisines with our amazing Breakfast & Lunch Buffet Offer at Radiant Resort Bangalore.Hurry Now!", link: "/package/exclusive-breakfast"
        },
        { title: "All-Day Dining Offer", image: "/package/packages-3.jpg", desc: "Feast your taste buds with appetizing cuisines on a spread of buffet options at Breakfast, Lunch, and Dinner at best rate ever!.", link: "/package/all-day" },
        { title: "Couples' Buffet Offer", image: "/package/packages-4.jpg", desc: "Enjoy a romantic vacation with your loved one at Radiant Resort Bangalore and dine in buffet style at Breakfast, Lunch, and Dinner at the best rate", link: "/package/couple-buffet" },
    ]
    return (
        <div><section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container py-lg-3">

                    <h2>Packages</h2>
                    <p><Link href="/"><a>Home</a></Link> &nbsp; / &nbsp; Packages</p>

                </div>
            </div>
        </section>

            <section className="w3l-feature-2">
                <div className="grid top-bottom ">
                    <div className="container py-md-5">
                        {/* <h3 className="title-big text-center">Rooms and Cottages at Radiant Resort near Bangalore
                        </h3> */}
                        <div className="middle-section row mt-lg-5 pt-md-3">
                           {DATA.map((item,index)=>{
                            return( <div className="three-grids-columns col-lg-4 col-md-6 mb-4" key={index}>
                            <img src={item.image} alt="" className="img-fluid" />
                            <div className="info">
                                <h4><a href="#url"> {item.title}</a></h4>
                                <p>{item.desc}
                                </p>
                                <Link href={item.link}><a className="btn mt-4">Read More </a></Link>
                            </div>
                        </div>)
                           })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Packages;