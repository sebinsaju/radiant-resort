import { useRouter } from "next/router";
import React from "react";

const Package = () => {
  const Data = [
    {
      title: "Enjoy Delicious Lunch in Buffet style",
      desc: "Make the most of our exclusive offer that is sure to elevate your culinary experience to the next level. Avail our best rates for scrumptious buffet lunch and take a hot sip of your favourite tea with delicious snacks with our Buffet Lunch offer.",
      rate: "INR 1200 + GST 18% per person",
      inc: [
        { item: "Welcome Drink" },
        { item: "Buffet Lunch" },
        { item: "High Tea and Snacks" },
      ],
      image: "/package/packages-1.jpg",
    },
    {
      title: "Sip and Dine With Our exclusive Breakfast & Lunch Offer!",
      desc: "Choose from a wide range of buffet options at our exclusive breakfast and lunch offer at the best available rate. Take a sip of our flavourful beverages and appetizing snacks while you enjoy your time at our resort. Make the most of our multi-cuisine dining at the Radiant Resort Bangalore. We serve an authentic full menu at breakfast and lunch and flavourful varieties of teas to recharge your mind.",
      rate: "INR 1500 + GST 18% per person",
      inc: [
        { item: "Welcome Drink" },
        { item: "Breakfast" },
        { item: "Buffet Lunch" },
        { item: "High Tea and Snacks" },
      ],
      image: "/package/packages-2.jpg",
    },
    {
      title: "All-Day Dining Offer",
      desc: "",
      Rate: "",
      inc: [{ item: "" }],
      image: "/packages-3",
    },
    {
      title:
        "Enjoy With Your Loved One With Our Couples' Buffet Offer At The Best Rate",
      desc: "Enjoy a romantic time with your sweetheart at our resort as you Relish mouth-watering delicacies in Buffet style Breakfast, Lunch and Dinner, at an all-in-one exclusive buffet offer. Feel special with a flavourful welcome drink and enjoy hot sips of tea with snacks during the sunset. ",
      rate: "INR 6000 + 12% taxes",
      inc: [
        { item: "Welcome Drink" },
        { item: "Breakfast" },
        { item: "Buffet Lunch" },
        { item: " High Tea and Snacks" },
        { item: "Dinner" },
      ],
      image: "/package/packages-4.jpg",
    },
  ];
  const route = useRouter();
  const data = {};
  if (route.query.slug === "buffet-lunch") {
    data = Data[0];
  }
  if (route.query.slug === "exclusive-breakfast") {
    data = Data[1];
  }
  if (route.query.slug === "all-day") {
    data = Data[2];
  }
  if (route.query.slug === "couple-buffet") {
    data = Data[3];
  }
  return (
    <section className="w3l-roomsingleblock1 py-5">
      <div className="container py-sm-4">
        <div className="row">
          <div className="col-lg-7 roomsingle">
            <h3 className="title-small">{data.title}</h3>
            <p>{data.desc}</p>
            <br />
            <h6>
              <span classNameName="font-weight-bolder">Rate</span>:{data.rate}
            </h6>
            <ul className="w3l-right-book mt-4">
              {data &&
                data.inc &&
                data.inc.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="fa fa-check" aria-hidden="true"></span>
                      {item.item}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-lg-5 mt-lg-0 mt-4">
            <img src={data.image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
