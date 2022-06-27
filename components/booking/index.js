import React from 'react'

const Booking = () => {
    return(
        <section className="w3l-availability-form" id="booking">
        <div className="w3l-availability-form-main py-5">
            <div className="container pt-lg-3 pb-lg-5">
                <div className="forms-top">
                    <div className="form-right">
                        <div className="form-inner-cont">
                            <h3 className="title-small">Check Availability</h3>
                            <form action="search-results.html" method="post" className="signin-form">
                                <div className="row book-form">
                                    <div className="form-input col-md-4 col-sm-6 mt-3">
                                        <label>Check-in Date</label>
                                        <input type="date" name="" placeholder="Date" required="" />
                                    </div>
                                    <div className="form-input col-md-4 col-sm-6 mt-3">
                                        <label>Check-out Date</label>
                                        <input type="date" name="" placeholder="Date" required="" />
                                    </div>
                                    <div className="form-input col-md-4 col-sm-6 mt-3">
                                        <label>Adults</label>
                                        <select className="selectpicker">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>

                                    </div>
                                    <div className="form-input col-md-4 col-sm-6 mt-3">
                                        <label>Children</label>
                                        <select className="selectpicker">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>

                                    </div>
                                    <div className="form-input col-md-4 col-sm-6 mt-3">
                                        <label>Price </label>
                                        <input type="text" name="" placeholder="Max Price ($)" required />
                                    </div>
                                    <div className="bottom-btn col-md-4 col-sm-6 mt-3">
                                        <label>Check availability </label>
                                        <button className="btn btn-style btn-primary w-100 px-2">Check Availability</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Booking