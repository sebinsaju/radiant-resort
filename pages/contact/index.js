import Link from 'next/link';
import React from 'react'

const Contact = () => {
    return (
        <div><section className="w3l-breadcrumb">
            <div className="breadcrum-bg py-sm-5 py-4">
                <div className="container py-lg-3">
                    <h2>Contact Us</h2>
                    <p><Link href="/"><a >Home</a></Link> &nbsp; / &nbsp; Contact</p>

                </div>
            </div>
        </section>
            <section className="w3l-contact-1 py-5">
                <div className="contacts-9 py-lg-5 py-sm-4">
                    <div className="container">
                        <div className=" contact-view">
                            <div className="cont-details">
                                {/* <p>Get in touch</p> */}
                                <h3 className="title-big">Contact Radiant Resort near Bangalore</h3>
                            </div>
                            {/* <div className="map-content-9">
                                <p>Radiant Resort<br />
                                    CK Palya Road, 17th km,
                                    Bannerghatta Road,
                                    Bangalore - 560083<br/>
                                    Phone:
                                    +91809598 8877 | Resort Front Desk and Reception
                                    +91808888 7777 | Corporate Sales and Enquiry
                                    +91 80 5002 7359 | Ayurvedic Spa and Facilities
                                    Email:info@radiantresort.com</p>
                            </div> */}
                        </div>
                        <div className="map-iframe my-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.02522436737!2d77.58822121453278!3d12.841646490941235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baef97510555555%3A0x9d59a83e59e2d57f!2sRadiant%20Resort!5e0!3m2!1sen!2sin!4v1656229458009!5m2!1sen!2sin"
                                width="100%" height="300" frameBorder="0" style={{ border: "0px", pointerEvents: "none" }}
                                allowFullScreen=""></iframe>
                        </div>
                        <div className="d-grid contact-view">
                            <div className="cont-details">
                                <div className="cont-top">
                                    <div className="cont-left text-center">
                                        <span className="fa fa-phone text-primary"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Call Us</h6>
                                        <p>+91809598 8877 | Resort Front Desk and Reception<br/>
                                            +91808888 7777 | Corporate Sales and Enquiry<br/>
                                            +91 80 5002 7359 | Ayurvedic Spa and Facilities</p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fa fa-envelope-o text-primary"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Email Us</h6>
                                        <p><Link href="mailto:example@mail.com"><a className="mail">info@radiantresort.com</a></Link></p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fa fa-map-marker text-primary"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h6>Address</h6>
                                        <p>Radiant Resort<br />
                                    CK Palya Road, 17th km,
                                    Bannerghatta Road,
                                    Bangalore - 560083.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="map-content-9 mt-lg-0 mt-4">
                                <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                                    <div className="twice-two">
                                        <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name"
                                            required="" />
                                        <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email"
                                            required="" />
                                    </div>
                                    <div className="twice">
                                        <input type="text" className="form-control" name="w3lSubject" id="w3lSubject"
                                            placeholder="Subject" required="" />
                                    </div>
                                    <textarea name="w3lMessage" className="form-control" id="w3lMessage" placeholder="Message"
                                        required=""></textarea>
                                    <button type="submit" className="btn btn-contact">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Contact;