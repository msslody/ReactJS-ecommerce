import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


export default function () {
  return (
    <>
        <footer className="footer-section ">
			<div className="container relative">

				<div className="sofa-img">
					<img src="images/sofa.png" alt="Image" className="img-fluid"/>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" className="row g-3">
								<div className="col-auto">
									<input type="text" className="form-control" placeholder="Enter your name"/>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" placeholder="Enter your email"/>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary">
										<span className="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><a href="/" className="footer-logo">Furni<span>.</span></a></div>
						<p className="mb-4">This website was originally built using a Bootstrap template and then converted to React JS. It integrates the FakeStore API to fetch data and Paypal Sandbox as part of a university assignment.</p>

						<ul className="list-unstyled custom-social">
							<li><a href="https://web.facebook.com/profile.php?id=100072938845145" target='_blank'><span className="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="https://t.me/msslody" target='_blank'><span className="fa fa-brands fa-telegram"></span></a></li>
							<li><a href="https://www.instagram.com/e.lodiee_/" target='_blank'><span className="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="https://www.linkedin.com/in/elodie-sok-280533333" target='_blank'><span className="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="/about">About us</a></li>
									<li><a href="/services">Services</a></li>
									<li><a href="/blog">Blog</a></li>
									<li><a href="/contact">Contact us</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Support</a></li>
									<li><a href="#">Knowledge base</a></li>
									<li><a href="#">Live chat</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="https://fakestoreapi.com/" target='_blank'>FakeStore API</a></li>
									<li><a href="https://themewagon.com/themes/furni-online-store/" target='_blank'>ThemeWagon</a></li>
									<li><a href="https://www.rupp.edu.kh/" target='_blank'>RUPP</a></li>
								</ul>
							</div>
						</div>
					</div>

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							{/* <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>
            				</p> */}
							<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://t.me/msslody" target='_blank'>Sok Elodie</a>
            				</p>
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
        <script src="js/bootstrap.bundle.min.js"></script>
		<script src="js/tiny-slider.js"></script>
		<script src="js/custom.js"></script>

    </>
  )
}
