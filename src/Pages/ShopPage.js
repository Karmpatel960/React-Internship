import React from 'react'
import Collections from '../Componets/Collections';
import { Link } from 'react-router-dom';

const ShopPage = () => {
    return (
        <>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/home">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shop</strong></div>
                    </div>
                </div>
            </div>
            <div className="row mb-5 my-5 mx-0 p-0">
                <div className="col-md-9 order-2">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                            <div className="d-flex">
                                <div className="dropdown mr-1 ml-md-auto">
                                    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Latest
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <Link className="dropdown-item" to="/shop">Men</Link>
                                        <Link className="dropdown-item" to="/shop">Women</Link>
                                        <Link className="dropdown-item" to="/shop">Children</Link>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                        <Link className="dropdown-item" to="/shop">Relevance</Link>
                                        <Link className="dropdown-item" to="/shop">Name, A to Z</Link>
                                        <Link className="dropdown-item" to="/shop">Name, Z to A</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/shop">Price, low to high</Link>
                                        <Link className="dropdown-item" to="/shop">Price, high to low</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="block-4 text-center border">
                                <figure className="block-4-image">
                                    <Link to="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" /></Link>
                                </figure>
                                <div className="block-4-text p-4">
                                    <h3><Link to="shop-single.html">Tank Top</Link></h3>
                                    <p className="mb-0">Finding perfect t-shirt</p>
                                    <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="block-4 text-center border">
                                <figure className="block-4-image">
                                    <Link to="shop-single.html"><img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" /></Link>
                                </figure>
                                <div className="block-4-text p-4">
                                    <h3><Link to="shop-single.html">Corater</Link></h3>
                                    <p className="mb-0">Finding perfect products</p>
                                    <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="block-4 text-center border">
                                <figure className="block-4-image">
                                    <Link to="shop-single.html"><img src="images/cloth_2.jpg" alt="Image placeholder" className="img-fluid" /></Link>
                                </figure>
                                <div className="block-4-text p-4">
                                    <h3><Link to="shop-single.html">Polo Shirt</Link></h3>
                                    <p className="mb-0">Finding perfect products</p>
                                    <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="block-4 text-center border">
                                <figure className="block-4-image">
                                    <Link to="shop-single.html"><img src="images/cloth_3.jpg" alt="Image placeholder" className="img-fluid" /></Link>
                                </figure>
                                <div className="block-4-text p-4">
                                    <h3><Link to="shop-single.html">T-Shirt Mockup</Link></h3>
                                    <p className="mb-0">Finding perfect products</p>
                                    <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="block-4 text-center border">
                                <figure className="block-4-image">
                                    <Link to="shop-single.html"><img src="images/shoe_1.jpg" alt="Image placeholder" className="img-fluid" /></Link>
                                </figure>
                                <div className="block-4-text p-4">
                                    <h3><Link to="shop-single.html">Corater</Link></h3>
                                    <p className="mb-0">Finding perfect products</p>
                                    <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                            <div className="block-4 text-center border">
                                <figure className="block-4-image">
                                    <Link to="shop-single.html"><img src="images/cloth_1.jpg" alt="Image placeholder" className="img-fluid" /></Link>
                                </figure>
                                <div className="block-4-text p-4">
                                    <h3><Link to="shop-single.html">Tank Top</Link></h3>
                                    <p className="mb-0">Finding perfect t-shirt</p>
                                    <p className="text-primary font-weight-bold">$50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12 text-center">
                            <div className="site-block-27">
                                <ul>
                                    <li><Link to="/shop">&lt;</Link></li>
                                    <li className="active"><span>1</span></li>
                                    <li><Link to="/shop">2</Link></li>
                                    <li><Link to="/shop">3</Link></li>
                                    <li><Link to="/shop">4</Link></li>
                                    <li><Link to="/shop">5</Link></li>
                                    <li><Link to="/shop">&gt;</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 order-1 mb-5 mt-5 pt-5 mb-md-0">
                    <div className="border p-4 rounded mb-4">
                        <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-1"><Link to="/shop" className="d-flex"><span>Men</span> <span className="text-black ml-auto">(2,220)</span></Link></li>
                            <li className="mb-1"><Link to="/shop" className="d-flex"><span>Women</span> <span className="text-black ml-auto">(2,550)</span></Link></li>
                            <li className="mb-1"><Link to="/shop" className="d-flex"><span>Children</span> <span className="text-black ml-auto">(2,124)</span></Link></li>
                        </ul>
                    </div>

                    <div className="border p-4 rounded mb-4">
                        <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                        </div>

                        <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                            <label for="s_sm" className="d-flex">
                                <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
                            </label>
                            <label for="s_md" className="d-flex">
                                <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
                            </label>
                            <label for="s_lg" className="d-flex">
                                <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
                            </label>
                        </div>

                        <div className="mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                            <Link to="/shop" className="d-flex color-item align-items-center" >
                                <span className="bg-danger color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Red (2,429)</span>
                            </Link>
                            <Link to="/shop" className="d-flex color-item align-items-center" >
                                <span className="bg-success color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Green (2,298)</span>
                            </Link>
                            <Link to="/shop" className="d-flex color-item align-items-center" >
                                <span className="bg-info color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Blue (1,075)</span>
                            </Link>
                            <Link to="/shop" className="d-flex color-item align-items-center" >
                                <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Purple (1,075)</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-md-7 site-section-heading pt-4">
                        <h2>Categories</h2>
                    </div>
                </div>
            </div>
            <Collections />
        </>
    )
}
export default ShopPage;