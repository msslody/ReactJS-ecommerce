import React from 'react'

export default function WeHelpSection() {
  return (
    <div>
        {/* <!-- Start We Help Section --> */}
		<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src="images/img-grid-1.jpg" alt="Untree.co"/></div>
							<div className="grid grid-2"><img src="images/img-grid-2.jpg" alt="Untree.co"/></div>
							<div className="grid grid-3"><img src="images/img-grid-3.jpg" alt="Untree.co"/></div>
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
						<p>We specialize in transforming spaces into stylish, functional, and contemporary environments. Our team guides you through every step, from concept to completion, ensuring your interior reflects the latest trends while meeting your needs and preferences.</p>

						<ul className="list-unstyled custom-list my-4">
							<li>Customized Solutions</li>
							<li>Expert Guidance</li>
							<li>Quality Materials</li>
							<li>Seamless Process</li>
						</ul>
						<p><a href="/shop" className="btn">Explore</a></p>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End We Help Section --> */}
    </div>
  )
}
