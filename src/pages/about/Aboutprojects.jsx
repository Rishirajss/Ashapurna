import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHome } from '@fortawesome/free-solid-svg-icons'
import projectimg1 from '../../img/icon_img/thumbnail.jpg'
import iconanmol from '../../img/icon_img/mb_logo.jpg'

export default function Aboutprojects() {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


  return (
    <>
       <div className="feature-project mt-5 pt-3">
                 <section>
                     <h2 className="fw-bold feature-project text-center">
                         Feature Projects
                     </h2>
                 </section>
                 <section className="py-5">
                  <div className="container">
                       <div className="row">
                            <div className="col-lg-12 d-none d-md-block">
                                   <div className="ashapurnaBusiness-right position-relative">
                                        <div className="tab-content">
                                             <div role="tabpanel" id="property-tabs-tabpane-first" aria-labelledby="property-tabs-tab-first" class="tab-pane active">
                                                  <div className='benefit-forth-section bg-transparent px-md-2 px-lg-0 property-type-slider'>
                                                  <Slider {...settings}>
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       <div className="cards cardStyle me-3">
                                                            <div className="card-info position-relative">
                                                                <div className="cardtopBorder">
                                                                <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                                <div className='tagStyle'>
                                                                    Few Units Left
                                                                </div>
                                                                </div>
                                                                <div className="cardbottomdata">
                                                                        <div className="cardHeadinfo">
                                                                            <div className="row">
                                                                                <div className="col-2">
                                                                                    <img src={iconanmol} width="100%" height="100%" alt="" />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                        Ashapurna Mohan Bagh  
                                                                                    </h3>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faLocationDot} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='locStyle'>
                                                                                        Near ITC Hotel, Uchiyarda, Jodhpur, Rajasthan
                                                                                    </p>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                        <div className="cardlocinfo">
                                                                            <div className="row">
                                                                                <div className="col-1">
                                                                                    <FontAwesomeIcon icon={faHome} />
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <p className='fs-6'>
                                                                                        Ready to Occupy
                                                                                    </p>
                                                                                </div> 
                                                                                <div className="col">
                                                                                    <button className='btn'>See All</button>
                                                                                </div> 
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                       </div> 
                                                       
                                                  </Slider>
                                             </div>   
                                             </div>  
                                        </div>
                                   </div>     
                                </div>    
                              

                            <div className="col-lg-12 moblie-box d-lg-none d-block">
                              <Slider {...settings}>
                                      <div className="cards">
                                           <div className="project-box bg-white p-2 rounded">
                                                <div className="project-top">
                                                    <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                </div>
                                                <div className="project-bottom mt-2 p-2">
                                                     <div className="project-heading">
                                                         <div className="row">
                                                            <div className="col-2">
                                                                      <img src={iconanmol} width="100%" height="100%" alt="" /> 
                                                            </div>  
                                                            <div className="col-10">
                                                                      <h3 className='fs-6 fw-bold'>
                                                                           Ashapurna Anmol I,II,III    
                                                                      </h3>
                                                                 </div>
                                                         </div>  
                                                     </div>
                                                     <div className="project-location mt-2">
                                                            <div className="row">
                                                                 <div className="col-1">
                                                                      <FontAwesomeIcon icon={faLocationDot} />
                                                                      </div> 
                                                                 <div className="col">
                                                                      <p className='locStyle'>
                                                                           Near New High Court , Jodhpur
                                                                      </p>
                                                                 </div> 
                                                            </div>  
                                                     </div>  
                                                     <div className="project-view">
                                                            <div className="row">
                                                                 <div className="col-1">
                                                                      <FontAwesomeIcon icon={faHome} />
                                                                      </div> 
                                                                 <div className="col-8">
                                                                      <p className='fs-6'>
                                                                           Few Units Left
                                                                      </p>
                                                                 </div> 
                                                                 <div className="col-3">
                                                                      <button className='btn btnStyle'>See All</button>
                                                                 </div> 
                                                            </div>
                                                     </div>
                                                </div> 
                                           </div>  
                                      </div>    
                                      <div className="cards">
                                           <div className="project-box bg-white p-2 rounded">
                                                <div className="project-top">
                                                    <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                </div>
                                                <div className="project-bottom mt-2">
                                                     <div className="project-heading">
                                                         <div className="row">
                                                            <div className="col-2">
                                                                      <img src={iconanmol} width="100%" height="100%" alt="" /> 
                                                            </div>  
                                                            <div className="col-10">
                                                                      <h3 className='fs-6 fw-bold'>
                                                                           Ashapurna Anmol I,II,III    
                                                                      </h3>
                                                                 </div>
                                                         </div>  
                                                     </div>
                                                     <div className="project-location mt-2">
                                                            <div className="row">
                                                                 <div className="col-1">
                                                                      <FontAwesomeIcon icon={faLocationDot} />
                                                                      </div> 
                                                                 <div className="col">
                                                                      <p className='locStyle'>
                                                                           Near New High Court , Jodhpur
                                                                      </p>
                                                                 </div> 
                                                            </div>  
                                                     </div>  
                                                     <div className="project-view">
                                                            <div className="row">
                                                                 <div className="col-1">
                                                                      <FontAwesomeIcon icon={faHome} />
                                                                      </div> 
                                                                 <div className="col-8">
                                                                      <p className='fs-6'>
                                                                           Few Units Left
                                                                      </p>
                                                                 </div> 
                                                                 <div className="col-3">
                                                                      <button className='btn btnStyle'>See All</button>
                                                                 </div> 
                                                            </div>
                                                     </div>
                                                </div> 
                                           </div>  
                                      </div>    
                                      <div className="cards">
                                           <div className="project-box bg-white p-2 rounded">
                                                <div className="project-top">
                                                    <img src={projectimg1} className='rounded' width="100%" height="100%" alt="" />
                                                </div>
                                                <div className="project-bottom mt-2">
                                                     <div className="project-heading">
                                                         <div className="row">
                                                            <div className="col-2">
                                                                      <img src={iconanmol} width="100%" height="100%" alt="" /> 
                                                            </div>  
                                                            <div className="col-10">
                                                                      <h3 className='fs-6 fw-bold'>
                                                                           Ashapurna Anmol I,II,III    
                                                                      </h3>
                                                                 </div>
                                                         </div>  
                                                     </div>
                                                     <div className="project-location mt-2">
                                                            <div className="row">
                                                                 <div className="col-1">
                                                                      <FontAwesomeIcon icon={faLocationDot} />
                                                                      </div> 
                                                                 <div className="col">
                                                                      <p className='locStyle'>
                                                                           Near New High Court , Jodhpur
                                                                      </p>
                                                                 </div> 
                                                            </div>  
                                                     </div>  
                                                     <div className="project-view">
                                                            <div className="row">
                                                                 <div className="col-1">
                                                                      <FontAwesomeIcon icon={faHome} />
                                                                      </div> 
                                                                 <div className="col-8">
                                                                      <p className='fs-6'>
                                                                           Few Units Left
                                                                      </p>
                                                                 </div> 
                                                                 <div className="col-3">
                                                                      <button className='btn btnStyle'>See All</button>
                                                                 </div> 
                                                            </div>
                                                     </div>
                                                </div> 
                                           </div>  
                                      </div>    
                                       
                              </Slider>
                            </div>
                       </div> 
                  </div>
                 </section>
       </div>
    </>
  )
}
