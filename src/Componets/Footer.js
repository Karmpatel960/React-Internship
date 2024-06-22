import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer class="site-footer border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="footer-heading mb-4">Navigations</h3>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <ul class="list-unstyled">
                                        <li><Link to="/">Sell online</Link></li>
                                        <li><Link to="/">Features</Link></li>
                                        <li><Link to="/">Shopping cart</Link></li>
                                        <li><Link to="/">Store builder</Link></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <ul class="list-unstyled">
                                        <li><Link to="/">Mobile commerce</Link></li>
                                        <li><Link to="/">Dropshipping</Link></li>
                                        <li><Link to="/">Website development</Link></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <ul class="list-unstyled">
                                        <li><Link to="/">Point of sale</Link></li>
                                        <li><Link to="/">Hardware</Link></li>
                                        <li><Link to="/">Software</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <h3 class="footer-heading mb-4">Promo</h3>
                            <Link to="/" class="block-6">
                                <img src="images/hero_1.jpg" alt="Image placeholder" class="img-fluid rounded mb-4" />
                                <h3 class="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
                                <p>Promo from  nuary 15 &mdash; 25, 2019</p>
                            </Link>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="block-5 mb-5">
                                <h3 class="footer-heading mb-4">Contact Info</h3>
                                <ul class="list-unstyled">
                                    <li class="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                                    <li class="phone"><Link to="/">+2 392 3929 210</Link></li>
                                    <li class="email">emailaddress@domain.com</li>
                                </ul>
                            </div>
                            <div class="block-7">
                                <form action="/" method="post">
                                    <label for="email_subscribe" class="footer-heading">Subscribe</label>
                                    <div class="form-group">
                                        <input type="text" class="form-control py-4" id="email_subscribe" placeholder="Email" />
                                        <input type="submit" class="btn btn-sm btn-primary" value="Send" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-5 mt-5 text-center">
                        <div class="col-md-12">
                            <p> &copy;All rights reserved By MultiShope</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;