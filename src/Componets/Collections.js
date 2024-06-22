import React from 'react'
import Img1 from '../IMG/women.jpg'
import Img2 from '../IMG/children.jpg'
import Img3 from '../IMG/men.jpg'
import { Link } from 'react-router-dom'

const Collections = () => {
    return (
        <>
            <div className="site-section site-blocks-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" >
                            <Link className="block-2-item" to="/">
                                <figure className="image">
                                    <img src={Img1} alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <span className="text-uppercase">Collections</span>
                                    <h3>Women</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" >
                            <Link className="block-2-item" to="/">
                                <figure className="image">
                                    <img src={Img2} alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <span className="text-uppercase">Collections</span>
                                    <h3>Children</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" >
                            <Link className="block-2-item" to="/">
                                <figure className="image">
                                    <img src={Img3} alt="" className="img-fluid" />
                                </figure>
                                <div className="text">
                                    <span className="text-uppercase">Collections</span>
                                    <h3>Men</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Collections;