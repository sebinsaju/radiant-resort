import Link from "next/link";
import React, { useEffect, useState } from "react";
import { instance } from "../../axios";
const DayOuting = () => {
  const [packages, setPackges] = useState("");
  useEffect(() => {
    instance.get("outingpackages").then((res) => {
      setPackges(res.data.packages)
    });
  }, []);
  const DATA = [
    {
      title: "Package 1",
      desc: "INR 1050+ taxes per person",
      incl: [
        { item: "Welcome Drink" },
        { item: "Buffet Lunch" },
        { item: "High Tea and Snacks" },
      ],
    },
    {
      title: "Package 2",
      desc: "INR 2000+ taxes per person",
      incl: [
        { item: "Welcome Drink" },
        { item: "Breakfast" },
        { item: "Buffet Lunch" },
        { item: "High Tea and Snacks" },
        { item: "Dinner" },
      ],
    },
    {
      title: "Package 3",
      desc: "INR 6000 + taxes two person",
      incl: [
        { item: "Welcome Drink" },
        { item: "Buffet Lunch" },
        { item: "High Tea and Snacks" },
        { item: "Room" },
      ],
    },
  ];
  const data = {
    title: "Utsav Restaurant at Radiant Resort near Bangalore",
    desc: "Utsav Restaurant at Radiant Resort Bangalore is an open air multi-cuisine restaurant serving a wide spread of choicest Indian and Chinese cuisines, the taste of which will linger in your mouth for a long time. It is the perfect place for food freaks to soak in the natural warmth and savour our sumptuous dishes.",
    image: "/restaurant/res.jpg",
  };
  return (
    <div>
      <section className="w3l-breadcrumb">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>Day Outing</h2>
            <p>
              <Link href="/">
                <a>Home</a>
              </Link>{" "}
              &nbsp; / &nbsp; Day Outing
            </p>
          </div>
        </div>
      </section>

      <section className="w3l-feature-2">
        <div className="grid top-bottom ">
          <div className="container py-md-5">
            <h3 className="title-big text-center mt-3">
              Day Outing Packages - Radiant Resort Bangalore
            </h3>
            <div className="middle-section row mt-lg-5 pt-md-3">
              {packages && packages.map((item, index) => {
                return (
                  <div
                    className="three-grids-columns col-lg-6 col-sm-12 mb-4"
                    key={index}
                    style={{ display: "flex" }}
                  >
                    <div className="info" style={{ width: "100%" }}>
                      <h4 className="text-center">
                        <a>{item.title}</a>
                      </h4>
                      <p className="text-center">{item.price}</p>
                      <ul style={{ paddingLeft: "30px" }}>
                        {item?.items &&
                          item.items.map((point, index) => {
                            return <li key={`point${index}`}>{point}</li>;
                          })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="my-3 text-center">
              <strong>
                <h5>NOTE : The taxes for Day Outing package is 5%</h5>
              </strong>
            </div>
          </div>
        </div>
      </section>
      <div className="container mb-5">
        <h3 className="title-big text-center mt-3">
          Activities at Radiant Resort Bangalore:
        </h3>
        <p>
          Amenities of the resort are available to all the packages mentioned
          above. The resort offers an assortment of games (indoor and outdoor),
          so that our guests may enjoy their holiday even more than they
          previously imagined they would:
        </p>
        <section className="w3l-roomsingleblock1 py-5">
          <div className="container py-sm-4">
            <div className="row">
              <div className="col-lg-7 roomsingle">
                <h3 className="title-small">Indoor Games</h3>
                <p>
                  At Radiant Resort Bangalore, we understand that sometimes,
                  Bangalore&apos;s weather is a tad unpredictable. For those
                  times, we are happy to provide our guests with several indoor
                  games, to be enjoyed with friends, family or both! The indoor
                  games available at the resort are:
                </p>
                <br />
                <ul className="pl-5 mt-4">
                  <li>Tables tennis</li>
                  <li>Chess</li>
                  <li>Carom</li>
                </ul>
              </div>
              <div className="col-lg-5 mt-lg-0 mt-4">
                <img src="/games/in.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-roomsingleblock1 py-5">
          <div className="container py-sm-4">
            <div className="row">
              <div className="col-lg-5 mt-lg-0 mt-4">
                <img src="/games/out.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-7 roomsingle">
                <h3 className="title-small">Outdoor Games</h3>
                <p>
                  Everybody enjoys working up a sweat while playing a sport,
                  once in a while. Radiant Resort Bangalore is right there with
                  you! We facilitate an assortment of outdoor games for our
                  guests to enjoy, compete, and bond. The games we offer
                  facilities for are:
                </p>
                <br />
                <ul className="pl-5 mt-4">
                  <li>Basketball</li>
                  <li>Cricket</li>
                  <li>Volleyball</li>
                  <li>Badminton</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DayOuting;
