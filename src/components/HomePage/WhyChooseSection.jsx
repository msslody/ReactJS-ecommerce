import React from 'react'

export default function WhyChooseSection(){
  return (
    <div>
        {/* <!-- Start Why Choose Us Section --> */}
		<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>
						Why choose us? We prioritize quality, innovation, and customer satisfaction. Every product is thoughtfully crafted with premium materials to deliver lasting value and a seamless experience you can rely on.
						</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/truck.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Enjoy fast and free shipping on all orders, delivering your favorite products straight to your doorstep without any extra hassle or cost.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/bag.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Shopping made easy with a seamless experience designed to save you time and effort, from browsing to checkout.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/support.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>With 24/7 support, we're always here to assist you, ensuring you have help whenever you need it, day or night.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src="images/return.svg" alt="Image" className="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Enjoy a hassle-free return process, making it easy to return any items with no stress or complications.</p>
								</div>
							</div>

						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src="images/why-choose-us-img.jpg" alt="Image" className="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
		{/* <!-- End Why Choose Us Section --> */}
    </div>
  )
}
