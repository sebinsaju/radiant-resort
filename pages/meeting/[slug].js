import { useRouter } from 'next/router';
import React from 'react'

const Meeting = () => {
    const Data = [
        { title: "Utsav Lawn at Radiant Resort near Bangalore", desc: "There's nothing like open air to set your senses free and send your spirits soaring. Utsav Lawn is the perfect place to host wedding, reception and birthday parties or corporate events, dinner parties, etc,. The resort also has a poolside dining option that can host up to a hundred people.", image: "/meetings/lawn.jpg" },
        { title: "Conference Hall at Radiant Resort near Bangalore", desc: "If you are looking for an ideal space to host small off-site corporate meetings or seminars, we have a spaciously built and elegantly furnished Conference Hall. The hall is equipped with all modern amenities to provide you the best of business ambience.", inc: [{ item: "30 Guests in Class Room Style Setting" }, { item: "30 Guests in Theatre Style Setting" }, { item: "40 Guests in Floating Crowd Style (Standing)" }, { item: "20 Guests in Board Room Style Setting" }], image: "/meetings/conference-hall.jpg" },
        { title: "Wild Grass Conference Hall at Radiant Resort near Bangalore", desc: "Wild Grass Conference Hall is designed to provide you an exclusive venue to host medium-sized seminars. Equipped with state-of-the-art facilities, you cannot find a better place to host your event.", image: "/meetings/wild-hall.jpg", inc: [{ item: "150 Guests in Class Room Style Setting" }, { item: "150 Guests in Theatre Style Setting" }, { item: "150 Guests in Floating Crowd Style (Standing)" }, { item: "50 Guests in Board Room Style Setting" },] },
        { title: "Mexican Hut at Radiant Resort near Bangalore", desc: "Spacious and elegant, Mexican Hut at Radiant Resort Bangalore is the perfect place if you are looking to host seminars and exhibitions.", image: "/meetings/mexican-hut.jpg", inc: [{ item: "400 Guests in Class Room Style Setting" }, { item: "400 Guests in Theatre Style Setting" }, { item: "500 Guests in Floating Crowd Style (Standing)" }, { item: "200 Guests in Board Room Style Setting" },] },
    ]
    const route = useRouter();
    const data = {};
    if (route.query.slug === "utsav-lawn") {
        data = Data[0];
    } if (route.query.slug === "conference-hall") {
        data = Data[1];
    } if (route.query.slug === "wild-hall") {
        data = Data[2];
    } if (route.query.slug === "mexican-hut") {
        data = Data[3];
    }
    return (
        <section className="w3l-roomsingleblock1 py-5">
            <div className="container py-sm-4">
                <div className="row">
                    <div className="col-lg-7 roomsingle">
                        <h3 className="title-small">{data.title}</h3>
                        <p>{data.desc}</p><br />
                        {/* <h6><span classNameName='font-weight-bolder'>Rate</span>:{data.rate}</h6> */}
                        <ul className="w3l-right-book mt-4">
                            {data && data.inc && data.inc.map((item, index) => {
                                return (<li key={index}><span className="fa fa-check" aria-hidden="true"></span>{item.item}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-5 mt-lg-0 mt-4">
                        <img src={data.image} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Meeting;