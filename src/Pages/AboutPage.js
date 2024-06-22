import React from 'react'
import { Link } from 'react-router-dom';
import Service from '../Components/Service';

const AboutPage = () => {
    return (
        <>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/home">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">About</strong></div>
                    </div>
                </div>
            </div>
            <div className="site-section border-bottom" data-aos="fade">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="block-16">
                                <figure>
                                    <img src="images/blog_1.jpg" alt="Company history" className="img-fluid rounded" />
                                    <Link to="/about" className="play-button popup-vimeo"><span className="ion-md-play" aria-hidden="true"></span></Link>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="site-section-heading pt-3 mb-4">
                                <h2 className="text-black">How We Started</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
                            <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section border-bottom" data-aos="fade">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>The Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_1.jpg" alt="Elizabeth Graham" className="mb-4" />
                                        <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                                        <p className="block-38-subheading">CEO/Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_2.jpg" alt="Jennifer Greive" className="mb-4" />
                                        <h3 className="block-38-heading h4">Jennifer Greive</h3>
                                        <p className="block-38-subheading">Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_3.jpg" alt="Patrick Marx" className="mb-4" />
                                        <h3 className="block-38-heading h4">Patrick Marx</h3>
                                        <p className="block-38-subheading">Marketing</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_4.jpg" alt="Mike Coolbert" className="mb-4" />
                                        <h3 className="block-38-heading h4">Mike Coolbert</h3>
                                        <p className="block-38-subheading">Sales Manager</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Service />
        </>
    )
}
export default AboutPage;