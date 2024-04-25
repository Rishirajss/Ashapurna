import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Countup from 'react-countup'
import icon1 from '../../img/icon_img/experience_check.png'
import icon2 from '../../img/icon_img/property.svg'
import icon3 from '../../img/icon_img/happy.png'
import icon4 from '../../img/icon_img/measuring-tape.png'
import icon5 from '../../img/icon_img/units.png'

export function About({aboutUsData,aboutinfoData}){

    // console.log(aboutinfoData[0].aboutPath+aboutinfoData[0].aboutDetails.about_delivered_image);
     // console.log(aboutinfoData[0].aboutDetails.about_delivered_image);
     const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 2,
        slidesToScroll: 2
      };

    return(
    <>
        <div className='py-md-5 py-sm-3 container'>
               {aboutUsData.length >= 1
                    ?
                    aboutUsData.map((v)=>{
                         //  console.log(v)
                          return(
                              <div class="row justify-content-center align-items-center g-2">
                                   <div class="col-sm-12 col-md-5 d-none d-md-block pt-5">
                                        <img src={v.aboutPath+v.aboutData.homepage_image} alt="" srcset="" className='img-fluid'/>
                                   </div>
                                   <div class="col-sm-12 col-md-7 ps-4 pt-5">
                                        <div className="position-relative">
                                             <span className='aboutpart '>
                                                  {v.aboutData.homepage_title}
                                             </span>
                                             <span className='aboutline'></span>
                                             <h1>
                                                  {v.aboutData.homepage_tagline}
                                             </h1>
                                             <p dangerouslySetInnerHTML={{ __html: v.aboutData.homepage_description }}>
                                                  {/* {v.aboutData.homepage_description} */}
                                             </p>
                                        </div>
                                   </div>
                              </div>
                          )    
                    })
                    
                    :
                    <div class="row justify-content-center align-items-center g-2">
                         No Data Found
                    </div>     
               }

               {aboutinfoData.length >= 1
               
                    ?
                      <div className='aboutcounter mt-5 px-3 py-4 d-none d-lg-block'>
                         <div className="row">
                              <div className="col">
                              <div className='mb-4 mb-md-0 text-center'>
                                   <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                        <img className='img-fluid' src={icon1} alt="" />
                                   </div>
                                   <span className='fs-3 fw-bold'>
                                        <div className='mt-2'>
                                             <span>
                                                  <Countup start={0} end={aboutinfoData[0].aboutDetails.about_years_experience_value} duration={2} delay={0}/>
                                             </span>
                                             <span>+</span> 
                                        </div>  
                                   </span>
                                   <p>
                                        {aboutinfoData[0].aboutDetails.about_years_experience_title}
                                   </p>
                              </div>
                              </div>
                              <div className="col">
                              <div className='mb-4 mb-md-0 text-center'>
                                   <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                        <img className='img-fluid' src={icon2} alt="" />
                                   </div>
                                   <span className='fs-3 fw-bold'>
                                        <div className='mt-2'>
                                             <span>
                                                  <Countup start={0} end={aboutinfoData[0].aboutDetails.about_project_completed_value} duration={2} delay={0}/>
                                             </span>
                                             <span>+</span> 
                                        </div>  
                                   </span>
                                   <p>
                                        {aboutinfoData[0].aboutDetails.about_project_completed_title}
                                   </p>
                              </div>
                              </div>
                              <div className="col">
                              <div className='mb-4 mb-md-0 text-center'>
                                   <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                        <img className='img-fluid' src={icon3} alt="" />
                                   </div>
                                   <span className='fs-3 fw-bold'>
                                        <div className='mt-2'>
                                             <span>
                                                  <Countup start={0} end={aboutinfoData[0].aboutDetails.about_happy_families_value} duration={2} delay={0}/>
                                             </span>
                                             <span>+</span> 
                                        </div>  
                                   </span>
                                   <p>
                                        {aboutinfoData[0].aboutDetails.about_happy_families_title}
                                   </p>
                              </div>
                              </div>
                              <div className="col">
                              <div className='mb-4 mb-md-0 text-center'>
                                   <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                        <img className='img-fluid' src={icon4} alt="" />
                                   </div>
                                   <span className='fs-3 fw-bold'>
                                        <div className='mt-2'>
                                             <span>
                                                  <Countup start={0} end={aboutinfoData[0].aboutDetails.about_delivered_value} duration={2} delay={0}/>
                                             </span>
                                             <span>+</span> 
                                        </div>  
                                   </span>
                                   <p>
                                        {aboutinfoData[0].aboutDetails.about_delivered_title}
                                   </p>
                              </div>
                              </div>
                              <div className="col">
                              <div className='mb-4 mb-md-0 text-center'>
                                   <div className='featureIcon-wrapper mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                        <img className='img-fluid' src={icon5} alt="" />
                                   </div>
                                   <span className='fs-3 fw-bold'>
                                        <div className='mt-2'>
                                             <span>
                                                  <Countup start={0} end={aboutinfoData[0].aboutDetails.about_units_value} duration={2} delay={0}/>
                                             </span>
                                             <span>+</span> 
                                        </div>  
                                   </span>
                                   <p>
                                        {aboutinfoData[0].aboutDetails.about_units_title} 
                                   </p>
                              </div>
                              </div>
                         </div>    
                      </div>
                    :
                      <div className='aboutcounter mt-5 px-3 py-4 d-none d-lg-block'>    
                           No Record
                      </div>
               }    

               <div className='my-5 d-block d-lg-none'>
                     <Slider {...settings}>
                         <div className="cards">
                              <div className="row">
                                   <div className="col-12">
                                        <div className='mb-4 mb-md-0 text-center'>
                                             <div className='featureIcon-wrapper1 mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                  <img className='img-fluid' src={icon1} alt="" />
                                             </div>
                                             <span className='fs-3 fw-bold'>
                                                  <div className='mt-2'>
                                                       <span>
                                                       <Countup start={0} end={27} duration={2} delay={0}/>
                                                       </span>
                                                       <span>+</span> 
                                                  </div>  
                                             </span>
                                             <p> Years Of Experience </p>
                                        </div>
                                   </div>
                              </div>
                         </div> 
                         <div className="cards">
                              <div className="row">
                                   <div className="col-12">
                                        <div className='mb-4 mb-md-0 text-center'>
                                             <div className='featureIcon-wrapper1 mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                  <img className='img-fluid' src={icon2} width="54px" alt="" />
                                             </div>
                                             <span className='fs-3 fw-bold'>
                                                  <div className='mt-2'>
                                                       <span>
                                                            <Countup start={0} end={40} duration={2} delay={0}/>
                                                       </span>
                                                       <span>+</span> 
                                                  </div>  
                                             </span>
                                             <p> Projects </p>
                                        </div>
                                   </div>
                              </div>
                         </div> 
                         <div className="cards">
                              <div className="row">
                                   <div className="col-12">
                                        <div className='mb-4 mb-md-0 text-center'>
                                             <div className='featureIcon-wrapper1 mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                  <img className='img-fluid' src={icon3} alt="" />
                                             </div>
                                             <span className='fs-3 fw-bold'>
                                                  <div className='mt-2'>
                                                       <span>
                                                            <Countup start={0} end={27500} duration={2} delay={0}/>
                                                       </span>
                                                       <span>+</span> 
                                                  </div>  
                                             </span>
                                             <p> Happy Families </p>
                                        </div>
                                   </div>
                              </div>
                         </div> 
                         <div className="cards">
                              <div className="row">
                                   <div className="col-12">
                                        <div className='mb-4 mb-md-0 text-center'>
                                             <div className='featureIcon-wrapper1 mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                  <img className='img-fluid' src={icon4} alt="" />
                                             </div>
                                             <span className='fs-3 fw-bold'>
                                                  <div className='mt-2'>
                                                       <span>
                                                            <Countup start={0} end={36} duration={2} delay={0}/>
                                                       </span>
                                                       <span>+</span> 
                                                  </div>  
                                             </span>
                                             <p> Lakh Sq.Ft Delivered </p>
                                        </div>
                                   </div>
                              </div>
                         </div> 
                         <div className="cards">
                              <div className="row">
                                   <div className="col-12">
                                        <div className='mb-4 mb-md-0 text-center'>
                                             <div className='featureIcon-wrapper1 mx-auto bg-white d-flex align-items-center justify-content-center rounded-1 mb-10'>
                                                  <img className='img-fluid' src={icon5} alt="" />
                                             </div>
                                             <span className='fs-3 fw-bold'>
                                                  <div className='mt-2'>
                                                       <span>
                                                            <Countup start={0} end={12000} duration={2} delay={0}/>
                                                       </span>
                                                       <span>+</span> 
                                                  </div>  
                                             </span>
                                             <p> Units </p>
                                        </div>
                                   </div>
                              </div>
                         </div> 
                     </Slider>
               </div>
        </div> 
    </>
    ) 
}