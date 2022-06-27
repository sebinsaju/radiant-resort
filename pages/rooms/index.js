import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Rooms = () => {
    const DATA=[
        {title:"Deluxe - Non AC",image:"/rooms/deluxe-nonac.jpg",desc:"Deluxe - Non AC Rooms at Radiant Resort Bangalore are among basic room types and come with utmost comfort.",link:"/room/deluxe-non-ac"},
        {title:"Deluxe Rooms (AC)",image:"/rooms/deluxe-ac.jpg",desc:"Spaciously built and elegantly furnished, Deluxe Rooms come with air conditioning and are the perfect retreat for the two of you.",link:"/room/deluxe-ac"},
        {title:"Executive Twin",image:"/rooms/executive-twin.jpg",desc:"Executive Twin Rooms at Radiant Resort Bangalore are the perfect hideaway if you are on vacation seeking tranquillity from mundane affairs.",link:"/room/executive-twin"},
        {title:"Luxury Suite",image:"/rooms/luxury-suite.jpg",desc:"For a dose of absolute peace and tranquillity, slip into our state-of-the-art Suites that offer all conveniences. The Suites come with a separate living room.",link:"/room/luxury-suite"},
        {title:"Wood House",image:"/rooms/room-4.jpg",desc:"Tastefully crafted to sync them with nature, Wood House at Radiant Resort Bangalore are built of wood and bamboo, and are shadowed by tall trees amidst lush greenery.",link:"/room/wood-house"},
        {title:"Deluxe Suite - pool view",image:"/rooms/deluxe-suite.jpg",desc:"For a dose of absolute peace and tranquillity, slip into our state-of-the-art Suites that offer all conveniences. The Suites come with a separate living room.",link:"/room/deluxe-pool"},
        {title:"Studio Room",image:"/rooms/studio-room.jpg",desc:"Spaciously built and elegantly furnished, Deluxe Rooms come with air conditioning and are the perfect retreat for the two of you.",link:"/room/studio-room"},
    ]
    return (
        <div><section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container py-lg-3">
                    <h2>Rooms</h2>
                    <p><Link href="/"><a>Home</a></Link> &nbsp; / &nbsp; Rooms</p>

                </div>
            </div>
        </section>

            <section className="w3l-feature-2">
                <div className="grid top-bottom py-5">
                    <div className="container py-md-5">
                        <h3 className="title-big text-center">Rooms and Cottages at Radiant Resort near Bangalore
                        </h3>
                        <div className="middle-section row mt-lg-5 pt-md-3">
                           {DATA.map((item,index)=>{
                            return(
                                <div className="three-grids-columns col-lg-4 col-md-6 mb-4" key={index}>
                                <img src={item.image} alt="" className="img-fluid" />
                                <div className="info">
                                    <h4><a href="#url">{item.title}</a></h4>
                                    <p>{item.desc}
                                    </p>
                                    <Link href={item.link}><a className="btn mt-4">Read More </a></Link>
                                </div>
                            </div>
                            )
                           })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Rooms;