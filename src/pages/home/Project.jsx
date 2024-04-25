import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHome } from '@fortawesome/free-solid-svg-icons'
import projectimg1 from '../../img/ashapurna-basera-flats-in-jodhpur.webp'
import iconanmol from '../../img/ashapurna-anmol-budget-villas.webp'

export default function Project({ourprojectdetails, projectinfo}) {

      // console.log(ourprojectdetails);
      const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    const settings1 = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
          <section className='ashapurnaBusiness-main'>
                  <div className="container">
                       <div className="row">
                            {projectinfo.length >= 1
                             ?
                              <div class="col-xl-8 col-lg-10">
                                   <div class="ashapurnaBusiness-left">
                                        <span class="subtitle position-relative pe-1">
                                             {projectinfo[0].aboutDetails.project_overview_title}
                                        </span>
                                        <h1 class="blue-color fw-bold headStyle mt-1">
                                            {projectinfo[0].aboutDetails.project_overview_tagline}
                                        </h1>
                                        <p class="paraStyle">
                                            {projectinfo[0].aboutDetails.project_overview_description}
                                        </p>
                                   </div>
                              </div> 
                             : 
                             <div class="col-xl-8 col-lg-10">
                             </div>
                            }

                            
                                <div className="col-lg-12 d-none d-md-block">
                                   <div className="ashapurnaBusiness-right position-relative">
                                        <div className="tab-content">
                                             <div role="tabpanel" id="property-tabs-tabpane-first" aria-labelledby="property-tabs-tab-first" class="tab-pane active">
                                                  <div className='benefit-forth-section bg-transparent px-md-2 px-lg-0 property-type-slider'>
                                                  <Slider {...settings}>
                                                       {ourprojectdetails.length >= 1
                                                            ?
                                                             ourprojectdetails[0].projectData.map((v)=>{
                                                                 return(
                                                                      <div className="cards cardStyle me-3">
                                                                           <div className="card-info position-relative">
                                                                                <div className="cardtopBorder">
                                                                                <img src={ourprojectdetails[0].projectPath+v.project_logo_1} className='rounded' width="100%" height="100%" alt="" />
                                                                                <div className='tagStyle'>
                                                                                     {v.current_status}
                                                                                </div>
                                                                                </div>
                                                                                <div className="cardbottomdata">
                                                                                     <div className="cardHeadinfo">
                                                                                          <div className="row">
                                                                                               <div className="col-2">
                                                                                                    <img src={ourprojectdetails[0].projectPath+v.project_logo_2} width="100%" height="100%" alt="" />
                                                                                               </div> 
                                                                                               <div className="col">
                                                                                                    <h3 className='fs-6 fw-bold'>
                                                                                                         {v.name}
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
                                                                                                         {v.address}
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
                                                                                                         {v.current_status}
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
                                                                 )
                                                             })                                                             
                                                            :
                                                              <div className="cards cardStyle me-3"> No Record Added </div>  
                                                       }
                                                  </Slider>
                                             </div>   
                                             </div>  
                                        </div>
                                   </div>     
                                </div>    
                              

                            <div className="col-lg-12 moblie-box d-lg-none d-block">
                              <Slider {...settings1}>
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
    </>
  )
}
