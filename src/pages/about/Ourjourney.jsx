import React from 'react'
import peopulicon from '../../img/icon_img/experience_check.png'
import homeicon from '../../img/icon_img/villas-completed.svg'
import happyicon from '../../img/icon_img/happy.png'
import propertyicon from '../../img/icon_img/property.svg'
import { Link } from "react-router-dom";
import Countup from 'react-countup'
import { Header } from '../../comman/Header'
import { Footer } from '../../comman/Footer'

export default function Ourjourney() {
  return (
    <>  
       <Header/>
                <div className="container">
                    <div className="about-main">
                        <div className="conatiner-fluid px-0">
                                <div className="text-center text-white fs-5">
                                        <span>
                                            <Link to="/">HOME</Link> /
                                        </span>
                                        <span>
                                            <Link to="#"> OUR JOURNEY </Link>
                                        </span>
                                </div>
                                <h2 className="text-center aboutheadstyle fw-bold mt-1">
                                    Our Journey
                                </h2>    
                        </div>   
                    </div>

                    <section class="ourAchievement-main">
                        <div class="container">
                            <div class="row">
                                <div class="ms-auto col-lg-7 col-md-8">
                                    <div class="achievement-content bg-white position-relative p-4">
                                        <span className="journeyTag">
                                            OUR JOURNEY
                                        </span>
                                        <h3 class="blue-color fw-bold mb-3">A Brief About Our Journey</h3>
                                        <div class="lh-24 fs-14 text-color">
                                            <p style={{textAlign: "justify"}}>
                                                Ashapurna started its journey in 1996 and registered as a Private Limited Company. After a year it turned into a Limited Company. We are proud that Ashapurna Buildcon Ltd. became the first ISO: 9001: 2000 Certified Company of western Rajasthan in the year 2004. Ashapurna Started its first project of 400 Villas / Plot in 1997 and completed it within the record time period of 18 months.
                                            </p>
                                            <p style={{textAlign: "justify"}}>
                                                Then in a series every project that was started, was completed within an 18-month period. Till now a total of 40+ projects consisting of around 6000 Villas, and around 18,000 Plots in various Residential townships / Commercial malls / Residential Multistoried complexes have already been completed and handed over to the respective customers. Shri Karan Singh Unchiyarda is also a recognized person in the hospitality sector as a renowned hotelier. The prestigious three-star comforts Residency Palace Hotel is a unique landmark in the city of Jodhpur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 

                    <section className="about-count">
                            <div className="row">
                                <div className="col">
                                    <div className='mb-4 mb-md-0 text-center'>
                                        <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                <img className='img-fluid' width="50px" src={peopulicon} alt="" />
                                        </div>
                                        <span className='fs-3 fw-bold'>
                                                <div className='mt-2 counterColor'>
                                                    <span>
                                                        <Countup start={0} end={27} duration={2} delay={0}/>
                                                    </span>
                                                    <span>+</span> 
                                                </div>  
                                        </span>
                                        <p className="text-white">
                                            Years Of Experience
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='mb-4 mb-md-0 text-center'>
                                        <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                <img className='img-fluid' width="50px" src={homeicon} alt="" />
                                        </div>
                                        <span className='fs-3 fw-bold'>
                                                <div className='mt-2 counterColor'>
                                                    <span>
                                                        <Countup start={0} end={40} duration={2} delay={0}/>
                                                    </span>
                                                    <span>+</span> 
                                                </div>  
                                        </span>
                                        <p className="text-white">
                                            Projects Completed
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='mb-4 mb-md-0 text-center'>
                                        <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                <img className='img-fluid' width="50px" src={happyicon} alt="" />
                                        </div>
                                        <span className='fs-3 fw-bold'>
                                                <div className='mt-2 counterColor'>
                                                    <span>
                                                        <Countup start={0} end={27500} duration={2} delay={0}/>
                                                    </span>
                                                    <span>+</span> 
                                                </div>  
                                        </span>
                                        <p className="text-white">
                                            Happy Families
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='mb-4 mb-md-0 text-center'>
                                        <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                <img className='img-fluid' width="50px" src={propertyicon} alt="" />
                                        </div>
                                        <span className='fs-3 fw-bold'>
                                                <div className='mt-2 counterColor'>
                                                    <span>
                                                        <Countup start={0} end={1200} duration={2} delay={0}/>
                                                    </span>
                                                    <span>+</span> 
                                                </div>  
                                        </span>
                                        <p className="text-white">
                                            Happy Families
                                        </p>
                                    </div>
                                </div>
                            </div> 
                    </section>

                    <section class="pt-lg-5 pt-4 milestones-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <h2 class="text-center blue-color text-capitalize mb-25 fw-bold">
                                        Our Flourishing Journey Over The Last Decade
                                    </h2>
                                </div>
                                <div class="col-lg-12">
                                    <div class="milestones-column position-relative mt-lg-5 mt-0">
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2023</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna MohanBagh</li>
                                                    <li>Ashapurna NRI 2</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2022</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna NRI</li>
                                                    <li>Ashapurna Township Pachpadra</li>
                                                    <li>Ashapurna Kundan Villa</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2021</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Aangan II</li>
                                                    <li>Ashapurna Aangan Prime</li>
                                                    <li>Ashapurna Anmol III</li>
                                                    <li>Ashapurna Enclave II</li>
                                                    <li>Ashapurna NRI</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2020</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Anmol I &amp; II</li>
                                                    <li>Ashapurna Angan I</li>
                                                    <li>Mohangarh Resort</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2019</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Nano Plaza I &amp; II</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2018</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Basera II</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2017</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Basera</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2016</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Nano Ragiment</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2015</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Heritage</li>
                                                    <li>Ashapurna Nano Avenue</li>
                                                    <li>Wind Mills, Jaisalmer Solar Plant</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2014</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Crown Plaza, Barmer</li>
                                                    <li>Ashapurna Golden Valley</li>
                                                    <li>Budda Group of Institutions, Udaipur</li>
                                                    <li>Ashapurna Nanomax II</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2013</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Chandan Vihar, Jaipur</li>
                                                    <li>Ashapurna Nano Grand</li>
                                                    <li>Ashapurna Platinum</li>
                                                    <li>Ashapurna City IV</li>
                                                    <li>Ashapurna Hotel, Jaipur</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2012</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Empire</li>
                                                    <li>Ashapurna City II</li>
                                                    <li>Ashapurna Paradise</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2011</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Nanomax I</li>
                                                    <li>Ashapurna City II</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2010</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Greens</li>
                                                    <li>Ashapurna Enclave</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2009</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Mohan Villas</li>
                                                    <li>Maa Bhagawati Nagar</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2008</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Commercial</li>
                                                    <li>Tripolia Ashapurna Tower</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2007</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Mall &amp; Multiplex</li>
                                                    <li>Ashapurna Township Sheoganj</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2006</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Township Pali</li>
                                                    <li>Ashapurna Valley</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">2005</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna City</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">2004</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Nagar</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">1999</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Township Jalore</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-start">
                                            <h3 class="blue-color fs-35 fw-600">1997</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Ashapurna Shikargarh</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="milestones-box px-3 py-4 text-center float-end">
                                            <h3 class="blue-color fs-35 fw-600">1996</h3>
                                            <div class="lh-30 text-color fs-16 text-start">
                                                <ul>
                                                    <li>Hotel Residency Palace</li>
                                                </ul>
                                            </div>
                                            <div class="triangle_shape"></div>
                                            <span class="milestone-dot"></span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> 
       <Footer/>
    </>
  )
}
