import React from 'react'

const LogoSlider = () => {
    return(
        <section className="w3l-logos py-5">
          <div className="container py-lg-3">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view">
                <img src="/images/logo1.jpg" alt="company-logo" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view">
                <img src="/images/logo2.jpg" alt="company-logo" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-sm-0 mt-4">
                <img src="/images/logo3.jpg" alt="company-logo" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-md-0 mt-4">
                <img src="/images/logo4.jpg" alt="company-logo" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-lg-0 mt-4">
                <img src="/images/logo2.jpg" alt="company-logo" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 logo-view mt-lg-0 mt-4">
                <img src="/images/logo1.jpg" alt="company-logo" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
    )
}

export default LogoSlider