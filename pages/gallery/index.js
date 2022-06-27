import React from 'react'
import Link from 'next/dist/client/link'
const Gallery = () => {
    const IMAGES = [{ image: "/gallery/1.jpg" }, { image: "/gallery/2.jpg" }, { image: "/gallery/3.jpg" }, { image: "/gallery/4.jpg" }, { image: "/gallery/5.jpg" }, { image: "/gallery/6.jpg" }, { image: "/gallery/7.jpg" }, { image: "/gallery/8.jpg" }, { image: "/gallery/9.jpg" }, { image: "/gallery/10.jpg" }, { image: "/gallery/11.jpg" }, { image: "/gallery/12.jpg" }, { image: "/gallery/13.jpg" }, { image: "/gallery/14.jpg" }, { image: "/gallery/15.jpg" }, { image: "/gallery/16.jpg" }, { image: "/gallery/17.jpg" }, { image: "/gallery/18.jpg" }, { image: "/gallery/19.jpg" }, { image: "/gallery/20.jpg" }, { image: "/gallery/21.jpg" }, { image: "/gallery/22.jpg" }, { image: "/gallery/23.jpg" }, { image: "/gallery/24.jpg" }, { image: "/gallery/25.jpg" }, { image: "/gallery/26.jpg" }]
    return (
        <div><section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container py-lg-3">

                    <h2>Gallery</h2>
                    <p><Link href="/"><a>Home</a></Link> &nbsp; / &nbsp; Gallery</p>

                </div>
            </div>
        </section>

            <section className="w3l-feature-2">
                <div className="grid top-bottom ">
                    <div className="container py-md-5">
                        {/* <h3 className="title-big text-center">Rooms and Cottages at Radiant Resort near Bangalore
                        </h3> */}
                        <div className="middle-section row mt-lg-5 pt-md-3">
                           {IMAGES.map((image,index)=>{
                            return( <div className="three-grids-columns col-lg-4 col-md-6 mb-4" key={index}>
                            <img src={image.image} alt="" className="img-fluid" />
                        </div>)
                           })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery