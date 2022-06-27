import Link from 'next/link';
import React from 'react'
const Packages = () => {
    const DATA = [
        {
            title: "Utsav Lawn", image: "/meetings/lawn.jpg", desc: "There's nothing like open air to set your senses free and send your spirits soaring. Utsav Lawn is the perfect place to host wedding, reception and birthday parties or corporate events.", link: "/meeting/utsav-lawn"
        },
        {
            title: "Conference Hall", image: "/meetings/conference-hall.jpg", desc: "If you are looking for an ideal space to host your off-site corporate meetings or seminars, we have a spaciously built and elegantly furnished Conference Hall.", link: "/meeting/conference-hall"
        },
        { title: "Wild Grass Conference Hall", image: "/meetings/wild-hall.jpg", desc: "Wild Grass Conference Hall is designed to provide you an exclusive venue to host medium-sized seminars.", link: "/meeting/wild-hall" },
        { title: "Mexican Hut", image: "/meetings/mexican-hut.jpg", desc: "Spacious and elegant, Mexican Hut at Radiant Resort Bangalore is the perfect place if you are looking to host seminars and exhibitions.", link: "/meeting/mexican-hut" },
    ]
    return (
        <div><section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container py-lg-3">

                    <h2>Meetings</h2>
                    <p><Link href="/"><a>Home</a></Link> &nbsp; / &nbsp; Meetings</p>

                </div>
            </div>
        </section>

            <section className="w3l-feature-2">
                <div className="grid top-bottom ">
                    <div className="container py-md-5">
                        <h3 className="title-big text-center">Meetings and Events at Radiant Resort near Bangalore
                        </h3>
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