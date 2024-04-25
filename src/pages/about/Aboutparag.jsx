import React from 'react'
import Countup from 'react-countup'
import sideimg from '../../img/ashapurna-buildcon-corporate-office.png'
import peopulicon from '../../img/icon_img/experience_check.png'
import homeicon from '../../img/icon_img/villas-completed.svg'
import happyicon from '../../img/icon_img/happy.png'
import propertyicon from '../../img/icon_img/property.svg'

export default function Aboutparag() {
  return (
    <>
       <div className="main">
                <div className="container">
                     <section className="about-info">
                              <div className="row">
                                   <div className="col-lg-6 col-sm-12">
                                        <img src={sideimg} width="100%" alt="" />
                                   </div>
                                   <div className="col-lg-6 col-sm-12">
                                        <div className="heading-about">
                                            <span className="text-uppercase about-eff position-relative">
                                                About Us
                                            </span>
                                            <h1 className="fw-bold">
                                                Welcome to Ashapurna
                                            </h1>
                                        </div>
                                        <div className="para-about">
                                            <p className="text-justify">
                                                Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 42+ projects and has delivered 40+ projects spanning 75,00,000 square feet, housing more than 27,500 smiling and satisfied faces.
                                            </p>
                                            <p className="text-justify">
                                                 Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 42+ projects and has delivered 40+ projects spanning 75,00,000 square feet, housing more than 27,500 smiling and satisfied faces.
                                            </p>
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
                </div>
            </div>  
    </>
  )
}
