import React, { useEffect } from 'react'
import { tns } from "tiny-slider/src/tiny-slider";
import "tiny-slider/dist/tiny-slider.css";


export default function Testimonal() {
	useEffect(() => {
		tns({
		  container: ".testimonial-slider",
		  items: 1,
		  slideBy: "page",
		  autoplay: true,
		  controls: true,
		  nav: false,
		  autoplayButtonOutput: false,
		  controlsContainer: "#testimonial-nav",
		});
	  }, []);
	
  return (
    <div>
        {/* <!-- Start Testimonial Slider --> */}
		<div className="testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
								<span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
							</div>

							<div className="testimonial-slider">
								
								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;The team really understood my vision and transformed my living room into a modern, cozy space I absolutely love! Their attention to detail was beyond what I expected.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Sophie M.</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								{/* <!-- END item --> */}

								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;I couldn't be happier with the new design for my office. It’s both functional and stylish, and the process was so easy. I highly recommend them to anyone looking to elevate their space.&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">Maria Jones</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								{/* <!-- END item --> */}

								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;From start to finish, they made sure everything was perfect. My home feels fresh and modern now, and I’m getting compliments from everyone who visits!&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
													</div>
													<h3 className="font-weight-bold">James L.</h3>
													<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
								{/* <!-- END item --> */}

							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End Testimonial Slider --> */}
    </div>
  )
}
