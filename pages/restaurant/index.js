import React from 'react'

const Restaurant = () => {
    const data={title:"Utsav Restaurant at Radiant Resort near Bangalore",desc:"Utsav Restaurant at Radiant Resort Bangalore is an open air multi-cuisine restaurant serving a wide spread of choicest Indian and Chinese cuisines, the taste of which will linger in your mouth for a long time. It is the perfect place for food freaks to soak in the natural warmth and savour our sumptuous dishes.",image:"/restaurant/res.jpg"};
    return (
        <section className="w3l-roomsingleblock1 py-5">
            <div className="container py-sm-4">
                <div className="row">
                    <div className="col-lg-7 roomsingle">
                        <h3 className="title-small">{data.title}</h3>
                        <p>{data.desc}</p><br/>
                        <p><strong>Timings</strong> : 8 am to 11 pm</p>
                        <ul className="w3l-right-book mt-4">
                            {data && data.inc && data.inc.map((item,index) => {
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

export default Restaurant;