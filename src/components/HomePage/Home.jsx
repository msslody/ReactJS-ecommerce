import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <>
        {/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
								<p className="mb-4">This website was originally built using a Bootstrap template and then converted to React JS. It integrates the FakeStore API to fetch data and Paypal Sandbox as part of a university assignment.</p>
								<p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link><Link to="/shop" className="btn btn-white-outline">Explore</Link></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/couch.png" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
            
		{/* <!-- End Hero Section --> */}


    </>
  )
}
