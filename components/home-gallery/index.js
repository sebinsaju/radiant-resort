import Link from 'next/link';
import React from 'react'

const HomeGallery = () => {
    return (
        <div className='home-gallery'>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div className='row'>
                            <div className='col-6'><img src='/facilities/bar.jpg' /></div>
                            <div className='col-6'><img src='/facilities/spa.jpg' /></div>
                            <div className='col-6 pt-4'><img src='/gallery/4.jpg' /></div>
                            <div className='col-6 pt-4'><img src='/gallery/10.jpg' /></div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 image-large'><img src='/gallery/14.jpg' /></div>
                </div>
                <div className='link pt-4'><Link href="/gallery"><a>View gallery</a></Link></div>
            </div>
        </div>
    )
}

export default HomeGallery;