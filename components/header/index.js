import React, { useState } from 'react'
import Link from 'next/link'
const Header = () => {
	const [toggle, setToggle] = useState(false);
	const toggler = () => {
		setToggle(!toggle)
	}
	return (
		<header className="w3l-header-nav">
			<nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
				<div className="container">
					<Link href="/"><a className="navbar-brand">
						<img src="/logo.png" alt="Your logo" style={{ height: "45px" }} /></a></Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggler}>
						<span className="navbar-toggler-icon"></span>
					</button>
					{toggle && <div className='mobile-menu'>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link href="/rooms"><a className="nav-link">Rooms</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/packages"><a className="nav-link" >Packages</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/meetings"><a className="nav-link" >Meetings</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/restaurant"><a className="nav-link" >Restaurant</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/day-outing">
									<a className="nav-link" >Day Outing</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/facilities">
									<a className="nav-link" >Facilities</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/contact"><a className="nav-link" >Contact Us</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/gallery">
									<a className="nav-link" >Gallery</a>
								</Link>
							</li>
						</ul>
					</div>}
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link href="/rooms"><a className="nav-link">Rooms</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/packages"><a className="nav-link" >Packages</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/meetings"><a className="nav-link" >Meetings</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/restaurant"><a className="nav-link" >Restaurant</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/day-outing">
									<a className="nav-link" >Day Outing</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/facilities">
									<a className="nav-link" >Facilities</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/contact"><a className="nav-link" >Contact Us</a></Link>
							</li>
							<li className="nav-item">
								<Link href="/gallery">
									<a className="nav-link" >Gallery</a>
								</Link>
							</li>
						</ul>
						{/* <a href="#booking" className="ml-3 book btn btn-secondary btn-style">Book Now</a> */}
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header