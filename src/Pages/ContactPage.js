import React from 'react'
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/home">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong></div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="h3 mb-3 text-black">Get In Touch</h2>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xl-6 col-lg-6 mt-3">
                            <form action="#" method="post">
                                <div className="p-3 p-lg-5 border">
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label for="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="c_lname" name="c_lname" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label for="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" id="c_email" name="c_email" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label for="c_subject" className="text-black">Subject </label>
                                            <input type="text" className="form-control" id="c_subject" name="c_subject" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label for="c_message" className="text-black">Message </label>
                                            <textarea name="c_message" id="c_message" cols="30" rows="7" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-12">
                                            <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Message" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xl-6 col-lg-6 mt-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064658049!2d-0.43124526458479395!3d51.52860701118051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1691136103521!5m2!1sen!2sin" width="100%" height="600" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactPage;