import React from 'react'
import poolicon from '../../img/icon_img/water-tank.svg'
import templeicon from '../../img/icon_img/temple.svg'
import entryicon from '../../img/icon_img/entry.svg'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Ourwork({ourwork, ourworkinfo}) {

    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
      <div className="ourwork-main">
                 <div className="container">
                    {ourworkinfo.length >= 1
                        ?
                        <>
                            <div className='position-relative'>
                                <span className='ourColor'> {ourworkinfo[0].aboutDetails.our_work_title} </span> 
                                <span className='ourworkline'></span>
                            </div>
                            <h2 className="text-white fw-bold mb-4">
                                {ourworkinfo[0].aboutDetails.our_work_tagline} 
                            </h2> 
                        </>
                        :
                        <div className='position-relative'> No Record Found </div>
                    }
                    
                    

                      <Slider {...settings}>
                      {ourwork.length >= 1
                            ?
                            ourwork[0].workData.map((v)=>{
                                return(
                                        <div className="cards">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-12">
                                                    <img src={ourwork[0].workPath+v.homepage_image} width="100%" height="100%" alt={v.homepage_image_alt_text}/>
                                                </div>
                                                <div className="col-md-7 col-sm-12 mt-3 mt-md-0">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="heading-part">
                                                                <div className="row">
                                                                    <div className="col-2 pe-0">
                                                                        <img src={ourwork[0].workPath+v.project_logo_2} className='d-inline' width="65px" height="50px" alt=""/>
                                                                    </div>
                                                                    <div className="col-10 ps-0 ms-0 fs-5">
                                                                        <h2 className='text-white d-inline'>{v.name}</h2>  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="desc-part text-white fw-normal">
                                                                {v.short_description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md col-sm-12">
                                                            <div className='fisrt-icon'>
                                                                <div className="row">
                                                                    <div className="col-3 pe-0">
                                                                        <p className='text-center'>
                                                                            <img src={poolicon} width='36px' alt="" />
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-9 ps-0">
                                                                            <h4 className='gold-text fs-5'>
                                                                            Swimming 
                                                                            </h4>
                                                                            <span className='text-white'>
                                                                                    POOL
                                                                            </span>
                                                                    </div>
                                                                </div>  
                                                            </div>            
                                                        </div>
                                                        <div className="col-md col-sm-12 my-2 my-md-0">
                                                            <div className='fisrt-icon'>
                                                                <div className="row">
                                                                    <div className="col-3 pe-0">
                                                                        <p className='text-center'>
                                                                            <img src={templeicon} width='36px' alt="" />
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-9 ps-0">
                                                                            <h4 className='gold-text fs-5'>
                                                                                TEMPLE
                                                                            </h4>
                                                                            <span className='text-white'>
                                                                                NEAR BY
                                                                            </span>
                                                                    </div> 
                                                                </div>  
                                                            </div>            
                                                        </div>
                                                        <div className="col-md col-sm-12">
                                                            <div className='fisrt-icon'>
                                                                <div className="row">
                                                                    <div className="col-3 pe-0">
                                                                        <p className='text-center'>
                                                                            <img src={entryicon} width='36px' alt="" />
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-9 ps-0">
                                                                            <h4 className='gold-text fs-5'>
                                                                                AVAILABILITY
                                                                            </h4>
                                                                            <span className='text-white'>
                                                                                VILLAS / PLOTS
                                                                            </span>
                                                                    </div> 
                                                                </div>  
                                                            </div>            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })
                            :    
                            <div className="cards">
                                
                            </div>
                        }   
                      </Slider>  
                 </div>   
            </div>
    </>
  )
}
