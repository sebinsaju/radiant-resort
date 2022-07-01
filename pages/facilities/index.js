import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Facilities = () => {
    const DATA=[
        {title:"Bar",image:"/facilities/bar.jpg",},
        {title:"Indoor Games",image:"/games/in.jpg",},
        {title:"Outdoor Games",image:"/games/out.jpg",},
        {title:"Play Area",image:"/facilities/play.jpg",},
        {title:"SPA",image:"/facilities/spa.jpg",},
        {title:"Swimming Pool",image:"/facilities/pool.jpg",}
    ]
    return (
        <div><section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container py-lg-3">
                    <h2>Facilities</h2>
                    <p><Link href="/"><a>Home</a></Link> &nbsp; / &nbsp; Facilities</p>

                </div>
            </div>
        </section>

            <section className="w3l-feature-2">
                <div className="grid top-bottom py-5">
                    <div className="container py-md-5">
                        <div className="middle-section row mt-lg-5 pt-md-3">
                           {DATA.map((item,index)=>{
                            return(
                                <div className="three-grids-columns col-lg-4 col-md-6 mb-4" key={index}>
                                <img src={item.image} alt="" className="img-fluid" />
                                <div className="info">
                                    <h4><a>{item.title}</a></h4>
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

export default Facilities;