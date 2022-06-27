import React from 'react'
import { useRouter } from 'next/dist/client/router';
const Room = () => {
    const DATA = [
        { title: "Deluxe - Non AC", desc: "Deluxe Non AC Rooms at Radiant Resort Bangalore are among the basic room types and come with utmost comfort. The rooms are spaciously appointed and well-furnished and come at reasonable prices. Our rooms have large windows overlooking the Bannerghatta National Park and come with all modern conveniences.Each room can accommodate 2 adults and 1 child.", image1: "", image2: "", image3: "", amen: [{ item: "Television" }, { item: "Wardrobe" }, { item: "Complimentary Wi-Fi" }, { item: "Complimentary Breakfast" }, { item: "Laundry Service" }, { item: "24-hour Cold and Hot Water" }, { item: "Complimentary Bottled Water" },] },
        { title: "Deluxe Rooms (AC)", desc: "Spaciously built and elegantly furnished, Deluxe Rooms come with air conditioning and are the perfect retreat for two adults. The rooms are equipped with comfortable queen-sized beds, free wi-fi, televisions and a host of other modern conveniences to make you feel at home. Our rooms have large windows overlooking the Bannerghatta National Park so that you never miss a glimpse of the nature outside.Each room can accommodate 2 adults and 1 child.", image1: "", image2: "", image3: "", amen: [{ item: "Air Conditioning" }, { item: "Television" }, { item: "Wardrobe" }, { item: "Complimentary Wi-Fi" }, { item: "Complimentary Breakfast" }, { item: "Laundry Service" }, { item: "24-hour Cold and Hot Water" }, { item: "Complimentary Bottled Water" },] },
        { title: "Executive Twin", desc: "Executive twin Rooms at Radiant Resort Bangalore are the perfect hideaway if you are on vacation seeking tranquillity from mundane affairs. The rooms have a large flooring area and offer you extra comfort, privacy and convenience. Guests will never miss the nature around as the rooms are fitted with large windows that offer you a splendid view of greenery.Each room can comfortably accommodate 3 adults and 1 child.", image1: "", image2: "", image3: "", amen: [{ item: "Air Conditioning" }, { item: "Television" }, { item: "Wardrobe" }, { item: "Complimentary Wi-Fi" }, { item: "Complimentary Breakfast" }, { item: "Laundry Service" }, { item: "24-hour Cold and Hot Water" }, { item: "Complimentary Bottled Water" },] },
        { title: "Luxury Suite", desc: "For a dose of absolute peace and tranquillity, slip into our state-of-the-art Suites that offer all conveniences. These contemporary Suites with separate living rooms are furnished with luxuries like couches and king-sized beds. The world-className facilities at our Suites are bound to make your stay a memorable one.", image1: "", image2: "", image3: "", amen: [{ item: "Television" }, { item: "Separate Living Room" }, { item: "Television" }, { item: "Wardrobe" }, { item: "Complimentary Wi-Fi" }, { item: "Complimentary Breakfast" }, { item: "Laundry Service" }, { item: "24-hour Cold and Hot Water" }, { item: "Complimentary Bottled Water" },] },
        { title: "Wood House", desc: "Tastefully crafted to sync them with nature, Wood House at Radiant Resort Bangalore are built of wood and bamboo, and are shadowed by tall trees amidst lush greenery. These houses are equipped with modern-day conveniences like air conditioning, LCD TV, free Wi-fi connectivity and much more.The Wood House can comfortably accommodate 2 adults and 1 child.", image1: "", image2: "", image3: "", amen: [{ item: "Air Conditioning" }, { item: "Television" }, { item: "Wardrobe" }, { item: "Complimentary Wi-Fi" }, { item: "Complimentary Breakfast" }, { item: "Laundry Service" }, { item: "24-hour Cold and Hot Water" }, { item: "Complimentary Bottled Water" },] },
        { title: "Deluxe Suite - pool view", desc: "Spaciously built and elegantly furnished, Deluxe Rooms come with air conditioning and are the perfect retreat for two adults. The rooms are equipped with comfortable queen-sized beds, free wi-fi, televisions and a host of other modern conveniences to make you feel at home. Our rooms have large windows overlooking the Bannerghatta National Park so that you never miss a glimpse of the nature outside.Each room can accommodate 2 adults and 1 child.", image1: "", image2: "", image3: "", amen: [{ item: "Air Conditioning" }, { item: "Television" }, { item: "Wardrobe" }, { item: "Complimentary Wi-Fi" }, { item: "Complimentary Breakfast" }, { item: "Laundry Service" }, { item: "24-hour Cold and Hot Water" }, { item: "Complimentary Bottled Water" },{ item: "Tea , Coffee supply" },] },
        { title: "Studio Room", desc: "Spaciously built and elegantly furnished, Studio Rooms come with air conditioning and are the perfect retreat for a group of people. The rooms are equipped with comfortable queen-sized beds, free wi-fi, televisions and a host of other modern conveniences to make you feel at home. Our rooms have large windows overlooking the Bannerghatta National Park so that you never miss a glimpse of the nature outside.", image1: "", image2: "", image3: "", amen: [{ item: "Air Conditioning" }, { item: "Television" }, { item: "Wardrobe" }, { item: "Complimentary Wi-Fi" }, { item: "Complimentary Breakfast" }, { item: "Laundry Service" }, { item: "24-hour Cold and Hot Water" }, { item: "Complimentary Bottled Water" },{ item: "Tea , Coffee supply" },] },
    ]
    const route = useRouter();
    const data = {};
    if (route.query.slug === "deluxe-non-ac") {
        data = DATA[0];
    } if (route.query.slug === "deluxe-ac") {
        data = DATA[1];
    } if (route.query.slug === "executive-twin") {
        data = DATA[2];
    } if (route.query.slug === "luxury-suite") {
        data = DATA[3];
    }if (route.query.slug === "wood-house") {
        data = DATA[4];
    }if (route.query.slug === "deluxe-pool") {
        data = DATA[5];
    }if (route.query.slug === "studio-room") {
        data = DATA[6];
    }
    return (
        <div>
            <section className="w3l-roomsingleblock1 py-5">
                <div className="container py-sm-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src="/standard-room1.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img src="/images/room2.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 roomsingle mt-lg-0 mt-4">
                            <h3 className="title-small">{data.title}
                            </h3>
                            <p className="roomsingle mt-3">
                                {data.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-roomsingleblock1 py-5">
                <div className="container py-sm-4">
                    <div className="row">
                        <div className="col-lg-7 roomsingle">
                            <h3 className="title-small">Amenities</h3>
                            <ul className="w3l-right-book mt-4">
                                {data && data.amen && data.amen.map((item, index) => {
                                    return <li key={index}><a><span className="fa fa-check" aria-hidden="true"></span>{item.item}
                                    </a></li>
                                })}
                            </ul>
                        </div>
                        <div className="col-lg-5 mt-lg-0 mt-4">
                            <img src="/room-1.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Room;