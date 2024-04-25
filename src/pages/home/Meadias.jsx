import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import bhoomi from '../../img/mb-bhoomi-pujan.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Meadias({mediadetails}) {

    console.log(mediadetails[0]);
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
         <div className="media">
                <div className="container">
                    <div className="mediaHeading">
                        <div className="row">
                            <div className="col-md-10 col-sm-12">
                                 <h1 className="fw-bold eventtag">
                                     Media And Event
                                 </h1>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <button className="btn btnColor px-lg-4 py-lg-3 py-2 px-3">
                                     See All
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mediaSlider mt-4 d-none d-lg-block">
                        <Slider {...settings}>
                            {mediadetails.length >= 1
                               ?
                               mediadetails[0].mediaData.map((v)=>{
                                 return(
                                        <div className="cards cardStyle me-3">
                                            <div className="card-info">
                                                <div className="cardtopBorder">
                                                    <div className="meadiaImg">
                                                        <img src={mediadetails[0].mediaPath+v.image} className='rounded' width="100%" height="100%" alt="" />
                                                    </div>
                                                    <div className="meadiaData">
                                                        <div className="mediaInfo">
                                                            <h3 className="mHeading">
                                                                {v.title}
                                                            </h3>
                                                        </div>
                                                        <div className="mediaData mt-3">
                                                            <div className="medialoc">
                                                                <div className="row">
                                                                    <div className="col-1">
                                                                        <FontAwesomeIcon icon={faLocationDot}/>  
                                                                    </div>
                                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                                        {v.location}
                                                                    </div>
                                                                </div>  
                                                            </div>
                                                            <div className="medialoc mt-1">
                                                                <div className="row">
                                                                    <div className="col-1">
                                                                        <FontAwesomeIcon icon={faClock}/>  
                                                                    </div>
                                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                                        {v.date}
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
                                <div className="cards cardStyle me-3"> No Event Are Added </div>
                            }
                            
                        </Slider>
                    </div>
                    <div className="meadiaSlider mt-3 d-lg-none d-sm-block">
                        <Slider {...settings1}>
                               <div className="cards moblie-media-box">
                                    <div className="media-box">
                                        <div className="media-top">
                                            <img src={bhoomi} className='rounded' width="100%" height="100%" alt="" />
                                        </div>
                                        <div className="media-bottom">
                                            <h3 className="mHeading">
                                                Bhumi Poojan Of Club House At Ashapurna NRI
                                            </h3>
                                            <div className="media-icons">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faLocationDot}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        Ashapurna NRI
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faClock}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        2023-12-23
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               </div> 
                               <div className="cards moblie-media-box">
                                    <div className="media-box">
                                        <div className="media-top">
                                            <img src={bhoomi} className='rounded' width="100%" height="100%" alt="" />
                                        </div>
                                        <div className="media-bottom">
                                            <h3 className="mHeading">
                                                Bhumi Poojan Of Club House At Ashapurna NRI
                                            </h3>
                                            <div className="media-icons">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faLocationDot}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        Ashapurna NRI
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faClock}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        2023-12-23
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               </div> 
                               <div className="cards moblie-media-box">
                                    <div className="media-box">
                                        <div className="media-top">
                                            <img src={bhoomi} className='rounded' width="100%" height="100%" alt="" />
                                        </div>
                                        <div className="media-bottom">
                                            <h3 className="mHeading">
                                                Bhumi Poojan Of Club House At Ashapurna NRI
                                            </h3>
                                            <div className="media-icons">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faLocationDot}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        Ashapurna NRI
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faClock}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        2023-12-23
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               </div> 
                               <div className="cards moblie-media-box">
                                    <div className="media-box">
                                        <div className="media-top">
                                            <img src={bhoomi} className='rounded' width="100%" height="100%" alt="" />
                                        </div>
                                        <div className="media-bottom">
                                            <h3 className="mHeading">
                                                Bhumi Poojan Of Club House At Ashapurna NRI
                                            </h3>
                                            <div className="media-icons">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faLocationDot}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        Ashapurna NRI
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faClock}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        2023-12-23
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               </div> 
                               <div className="cards moblie-media-box">
                                    <div className="media-box">
                                        <div className="media-top">
                                            <img src={bhoomi} className='rounded' width="100%" height="100%" alt="" />
                                        </div>
                                        <div className="media-bottom">
                                            <h3 className="mHeading">
                                                Bhumi Poojan Of Club House At Ashapurna NRI
                                            </h3>
                                            <div className="media-icons">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faLocationDot}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        Ashapurna NRI
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <FontAwesomeIcon icon={faClock}/>  
                                                    </div>
                                                    <div className="col-11" style={{fontSize:"15px"}}>
                                                        2023-12-23
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
    </>
  )
}
