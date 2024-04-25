import React from 'react'
import { Header } from '../../comman/Header'
import { Footer } from '../../comman/Footer'
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
       <Header/> 
                <div className="about-main">
                    <div className="conatiner-fluid px-0">
                            <div className="text-center text-white fs-5">
                                    <span>
                                        <Link to="/">HOME</Link> /
                                    </span>
                                    <span>
                                        <Link to="#"> CONTACT US </Link>
                                    </span>
                            </div>
                            <h2 className="text-center aboutheadstyle fw-bold mt-1">
                                    Contact Us
                            </h2>    
                    </div>   
                </div>

                <section class="contact-section">
                    <div class="container">
                        <div class="mb-40 row">
                            <div class="col-lg-12">
                                <div class="text-center mb-40">
                                    <h1 class="blue-color fw-bold mb-3 fs-35">Get In Touch</h1>
                                    <p class="text-color fs-14 text-center">To request a quote, contact us directly or fill out the form and we will get back to you promptly.</p>
                                </div>
                            </div>
                            <div class="mx-auto col-lg-4 col-md-6">
                                <div class="contact-info d-flex align-items-center justify-content-start shadow bg-golden-color rounded p-4 mb-3 mb-lg-4">
                                    <span class="d-flex align-items-center flex-shrink-0 justify-content-center light-golden-color fs-30">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                                        </svg>
                                    </span>
                                    <div class="ms-4">
                                        <h5 class="blue-color">Email</h5>
                                        <p class="text-white fs-14 mb-0">
                                            <a class="text-white text-decoration-none" target="_blank" href="mailto:marketing@ashapurna.com">marketing@ashapurna.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-auto col-lg-4 col-md-6">
                                <div class="contact-info d-flex align-items-center justify-content-start shadow bg-golden-color rounded p-4 mb-3 mb-lg-4">
                                    <span class="d-flex align-items-center flex-shrink-0 justify-content-center light-golden-color fs-30">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                        </svg>
                                    </span>
                                    <div class="ms-4">
                                        <h5 class="blue-color">Address</h5>
                                        <p class="text-white fs-14 mb-0">
                                            <a class="text-white text-decoration-none" target="_blank" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457918.34401696065!2d73.037212!3d26.278306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sus!4v1674640627695!5m2!1sen!2sus">
                                                -, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD, OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-auto col-lg-4 col-md-6">
                                <div class="contact-info d-flex align-items-center justify-content-start shadow bg-golden-color rounded p-4 mb-3 mb-lg-4">
                                    <span class="d-flex align-items-center flex-shrink-0 justify-content-center light-golden-color fs-30">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                                        </svg>
                                    </span>
                                    <div class="ms-4">
                                        <h5 class="blue-color">Support</h5>
                                        <p class="text-white fs-14 mb-0">
                                            <a class="text-white text-decoration-none" target="_blank" href="tel:9314041747">9314041747</a>
                                            ,<a class="text-white text-decoration-none ms-2" target="_blank" href="tel:0291-2514747, 9610383747">0291-2514747, 9610383747</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="mb-5 mb-lg-0">
                                    <h2 class="blue-color fs-26 text-capitalize mb-20">Find us on Map</h2>
                                    <div class="p-lg-2">
                                        <iframe width="100%" height="440px" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457918.34401696065!2d73.037212!3d26.278306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b840646df082cc!2sAshapurna%20Buildcon%20Ltd%20Corporate%20office!5e0!3m2!1sen!2sus!4v1674640627695!5m2!1sen!2sus" title="Ashapurna Buildcon Ltd Circuit House Road, Opposite LIC Office, Jodhpur, Rajasthan 342006" aria-label="Ashapurna Buildcon Ltd Circuit House Road, Opposite LIC Office, Jodhpur, Rajasthan 342006"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-form p-4 position-relative overflow-hidden">
                                    <span class="golden-color subtitle1 position-relative pe-3">Write to us!</span>
                                    <h3 class="blue-color fs-22 mb-4 mb-lg-0 text-capitalize">Have a question?</h3>
                                    <form class="careeruiryModal-form row career-form mt-lg-4">
                                        <div class="mb-4 col-lg-6">
                                            <div class="outlined-input">
                                                <input type="text" class="w-100" placeholder=" " value=""/>
                                                <label>Name</label>
                                            </div>
                                        </div>
                                        <div class="mb-4 col-lg-6">
                                            <div class="outlined-input">
                                                <input type="email" class="w-100" placeholder=" " value=""/>
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div class="mb-4 col-lg-6">
                                            <div class="outlined-input">
                                                <input type="number" class="w-100" placeholder=" " maxlength="10" value=""/>
                                                <label>Phone</label>
                                            </div>
                                        </div>
                                        <div class="mb-4 col-lg-6">
                                            <div class="outlined-select">
                                                <select required="">
                                                    <option class="option-hidden" selected=""></option>
                                                    <option value="Site Enquiry">Site Enquiry</option>
                                                    <option value="Management">Management</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <label class="fs-16">Subject</label>
                                            </div>
                                        </div>
                                        <div class="mb-4 col-12">
                                            <div class="outlined-input">
                                                <textarea class="w-100 resize-none" placeholder=" " rows="3"></textarea>
                                                <label>Message</label>
                                            </div>
                                        </div>
                                        <div class="mb-2 col-12">
                                            <button type="button" class="button-golden">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                </section> 
        <Footer/>        
    </>
  )
}
