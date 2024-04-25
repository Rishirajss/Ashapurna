import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import bglogo from '../img/logo_bgremove.svg'

export function Footer(){
    return(
        <>
            <div className=" footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 divBorder mt-5 my-4">
                            <div className="footer-icon">
                                 <div className='footerLogo'>
                                      <img src={bglogo} alt="" />  
                                 </div>
                                 <div className="row my-3 mx-2 mx-md-0">
                                     <div className="col-1 border border-1" style={{width:"auto",height:"auto", padding:"7px"}}>
                                         <FontAwesomeIcon icon={faPhone} className='me-2 text-white fs-5' />
                                     </div>   
                                     <div className="col">
                                            <a href="telto:9314041747" className='anchar-align d-block'>9314041747</a>
                                            <a href="telto:0291-2514747, 9610383747" className='anchar-align'>0291-2514747, 9610383747</a>
                                     </div>   
                                 </div>   
                                 {/* <div className="row my-3 mx-2 mx-md-0">
                                     <div className="col-lg-1  col-sm-6 border border-1" style={{width:"auto",height:"auto", padding:"7px"}}>
                                         <FontAwesomeIcon icon={faEnvelope} className='me-2  text-white' />
                                     </div>   
                                     <div className="col-lg-11 col-sm-6">
                                         <span >
                                            <a href="mailto:marketing@ashapurna.com" className='anchar-align'>marketing@ashapurna.com</a>
                                         </span>
                                     </div>   
                                 </div>  */}
                                 <div className="row mx-2 my-3">
                                     <div className="col-1 border border-1 text-center" style={{width:"auto",height:"auto", padding:"7.2px"}}>
                                        <FontAwesomeIcon icon={faEnvelope} className='me-2  text-white' />
                                     </div>
                                     <div className="col">
                                        <a href="mailto:marketing@ashapurna.com" className='anchar-align'>marketing@ashapurna.com</a>
                                     </div>
                                 </div>  
                                 <div className="row mx-2 mx-md-0">
                                     <div className="col-1 border border-1" style={{width:"auto",height:"38px", padding:"7px 10px 7px 14px"}}>
                                         <FontAwesomeIcon icon={faLocationDot} className='me-2 text-white' />
                                     </div>   
                                     <div className="col">
                                         <span className='d-block text-white'>
                                                4A, EAST PATEL NAGAR, CIRCUIT HOUSE ROAD,
                                                OPPOSITE LIC OFFICE, Jodhpur, Rajasthan, 342011
                                         </span>
                                     </div>   
                                 </div>   
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 divBorderright mt-5 my-4">
                            <h4 className='fw-500 fs-5 text-white position-relative ms-4'>
                                Useful Links                                
                            </h4>
                            <div className='d-flex align-item-center flex-wrap ms-4 mb-4 mt-4'>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Residential Projects</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Commercial projects</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Investors Club</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">NRI corner</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Career</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Become a Partner</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Our Testimonials</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Privacy Policy</a>
                                </div>
                                <div class="mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Terms & Conditions</a>
                                </div>
                            </div>

                            <h4 className='fw-500 fs-5 text-white position-relative ms-4 mt-3'>
                                Important Links                                
                            </h4>
                            <div className='d-flex align-item-center flex-wrap ms-4 mb-4 mt-4'>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Social Responsibility</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Corporate Profile</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">Investors Why invest in jodhpur?</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">RERA Disclaimer</a>
                                </div>
                                <div class="usefullinks mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">EMI Calculator</a>
                                </div>
                                <div class="mb-2 me-2">
                                    <a class="text-capitalize fw-400 fs-16 light-grey" href="/residential">referral Scheme</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-5">
                            <h5 className='fw-bold text-white text-center'>
                                Follow Us On
                            </h5>
                            <div className="soicallinkBox text-center mt-3">
                                <span className='soicalIcon me-2'>
                                      <FontAwesomeIcon className='' icon={faFacebook}/>
                                </span>
                                <span className='soicalIcon me-2'>
                                      <FontAwesomeIcon icon={faInstagram}/>
                                </span>
                                <span className='soicalIcon me-2'>
                                      <FontAwesomeIcon icon={faYoutube}/>
                                </span>
                                <span className='soicalIcon me-2'>
                                      <FontAwesomeIcon icon={faTwitter}/>
                                </span>
                                <span className='soicalIcon me-2'>
                                      <FontAwesomeIcon icon={faPinterest}/>
                                </span>
                                <span className='soicalIcon'>
                                      <FontAwesomeIcon icon={faLinkedin}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom pt-5">
                <div className="container">
                     <div className="row">
                        <div className="col-lg-12">
                            <div className='text-center d-flex flex-wrap justify-content-start justify-content-lg-center align-items-center'>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">real estate developer in jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">top builders in jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">top residental projects in jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">Commercial property in jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">Houses in Rajasthan</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">Flats In Jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">Villas In Jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">Plots In Jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">2BHK Flats In Jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">JDA Property In Jodhpur</a>
                                 </div>
                                 <div class="m-2 text-capitalize footer-links">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">Property Type</a>
                                 </div>
                                 <div class="m-2 text-capitalize">
                                    <a class="blue-color-2 fw-400 pe-3" href="/">Properties in jodhpur</a>
                                 </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className='my-4'>
                                 <hr className='divider-line-2 mx-lg-auto' />
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='text-lg-center text-start fw-400 blue-color-2 fs-14 px-2 px-lg-5 lh-30 mb-0'>
                                <p className='fs-6'>
                                    The information on the website regarding the project, except the legal documents, is purely indicative and representational and do not constitute a promise by the company. Further, the Company/Architects reserve the right to add / delete any details / specifications / elevations mentioned, if so warranted.
                                </p>
                            </div>
                        </div>
                     </div>
                </div>
                <div className='py-3 bgColor'>
                    <div className="container">
                        <p className='pt-1'>
                            Copyright © 2023 Ashapurna Buildcon Limited
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}