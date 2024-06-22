import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="site-section block-3 site-blocks-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 site-section-heading text-center pt-4">
                        <h2>Featured Products</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="item col-sm-12 col-lg-3 col-xl-3 col-md-6 col-12">
                        <div className="text-center">
                            <figure className="block-4-image">
                                <img src="images/cloth_1.jpg" alt="Tank Top" className="img-fluid" />
                            </figure>
                            <div className="block-4-text p-4">
                                <h3><Link to="/">Tank Top</Link></h3>
                                <p className="mb-0">Finding perfect t-shirt</p>
                                <p className="text-primary font-weight-bold">$50</p>
                            </div>
                        </div>
                    </div>
                    <div className="item col-sm-12 col-lg-3 col-xl-3 col-md-6 col-12">
                        <div className="text-center">
                            <figure className="block-4-image">
                                <img src="images/shoe_1.jpg" alt="Corater" className="img-fluid" />
                            </figure>
                            <div className="block-4-text p-4">
                                <h3><Link to="/">Corater</Link></h3>
                                <p className="mb-0">Finding perfect products</p>
                                <p className="text-primary font-weight-bold">$50</p>
                            </div>
                        </div>
                    </div>
                    <div className="item col-sm-12 col-lg-3 col-xl-3 col-md-6 col-12">
                        <div className="text-center">
                            <figure className="block-4-image">
                                <img src="images/cloth_2.jpg" alt="Polo Shirt" className="img-fluid" />
                            </figure>
                            <div className="block-4-text p-4">
                                <h3><Link to="/">Polo Shirt</Link></h3>
                                <p className="mb-0">Finding perfect products</p>
                                <p className="text-primary font-weight-bold">$50</p>
                            </div>
                        </div>
                    </div>
                    <div className="item col-sm-12 col-lg-3 col-xl-3 col-md-6 col-12">
                        <div className="text-center">
                            <figure className="block-4-image">
                                <img src="images/cloth_3.jpg" alt="T-Shirt Mockup" className="img-fluid" />
                            </figure>
                            <div className="block-4-text p-4">
                                <h3><Link to="/">T-Shirt Mockup</Link></h3>
                                <p className="mb-0">Finding perfect products</p>
                                <p className="text-primary font-weight-bold">$50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;