import Link from 'next/link';
import React from 'react'

const Contact = () => {
    return (
        <div><section class="w3l-breadcrumb">
            <div class="breadcrum-bg py-sm-5 py-4">
                <div class="container py-lg-3">
                    <h2>Contact Us</h2>
                    <p><Link href="/"><a >Home</a></Link> &nbsp; / &nbsp; Contact</p>

                </div>
            </div>
        </section>
            <section class="w3l-contact-1 py-5">
                <div class="contacts-9 py-lg-5 py-sm-4">
                    <div class="container">
                        <div class=" contact-view">
                            <div class="cont-details">
                                {/* <p>Get in touch</p> */}
                                <h3 class="title-big">Contact Radiant Resort near Bangalore</h3>
                            </div>
                            {/* <div class="map-content-9">
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
                        <div class="map-iframe my-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.02522436737!2d77.58822121453278!3d12.841646490941235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baef97510555555%3A0x9d59a83e59e2d57f!2sRadiant%20Resort!5e0!3m2!1sen!2sin!4v1656229458009!5m2!1sen!2sin"
                                width="100%" height="300" frameborder="0" style={{ border: "0px", pointerEvents: "none" }}
                                allowfullscreen=""></iframe>
                        </div>
                        <div class="d-grid contact-view">
                            <div class="cont-details">
                                <div class="cont-top">
                                    <div class="cont-left text-center">
                                        <span class="fa fa-phone text-primary"></span>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Call Us</h6>
                                        <p>+91809598 8877 | Resort Front Desk and Reception<br/>
                                            +91808888 7777 | Corporate Sales and Enquiry<br/>
                                            +91 80 5002 7359 | Ayurvedic Spa and Facilities</p>
                                    </div>
                                </div>
                                <div class="cont-top margin-up">
                                    <div class="cont-left text-center">
                                        <span class="fa fa-envelope-o text-primary"></span>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Email Us</h6>
                                        <p><Link href="mailto:example@mail.com"><a class="mail">info@radiantresort.com</a></Link></p>
                                    </div>
                                </div>
                                <div class="cont-top margin-up">
                                    <div class="cont-left text-center">
                                        <span class="fa fa-map-marker text-primary"></span>
                                    </div>
                                    <div class="cont-right">
                                        <h6>Address</h6>
                                        <p>Radiant Resort<br />
                                    CK Palya Road, 17th km,
                                    Bannerghatta Road,
                                    Bangalore - 560083.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="map-content-9 mt-lg-0 mt-4">
                                <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                                    <div class="twice-two">
                                        <input type="text" class="form-control" name="w3lName" id="w3lName" placeholder="Name"
                                            required="" />
                                        <input type="email" class="form-control" name="w3lSender" id="w3lSender" placeholder="Email"
                                            required="" />
                                    </div>
                                    <div class="twice">
                                        <input type="text" class="form-control" name="w3lSubject" id="w3lSubject"
                                            placeholder="Subject" required="" />
                                    </div>
                                    <textarea name="w3lMessage" class="form-control" id="w3lMessage" placeholder="Message"
                                        required=""></textarea>
                                    <button type="submit" class="btn btn-contact">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default Contact;