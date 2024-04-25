import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Whyus({wData, whyinfo}) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <>
        <div className='why-main my-5'>
          <div className="container">
             <div className="row">
                {whyinfo.length >= 1
                  ?
                    <div class="col-sm-12 col-md-4 ps-4 pt-5">
                        <div className='position-relative'>
                            <span className='aboutpart'>
                                {whyinfo[0].aboutDetails.why_us_title}
                            </span>
                            <span className='whysideline'></span>
                        </div>
                        <h1 className='fw-bold fs-3'>
                            {whyinfo[0].aboutDetails.why_us_tagline}
                        </h1>
                        <p className='para'>
                            {whyinfo[0].aboutDetails.why_us_description}
                        </p>
                    </div>
                  :  
                    <div class="col-sm-12 col-md-4 ps-4 pt-5"> No Data Found </div>
                }

                  <div class="col-sm-12 col-md-8 pt-5">
                      <div className="d-none d-lg-block">
                            <div className="row">
                            {wData.length >= 1
                               ?
                                wData[0].whyData.map((v)=>{
                                    return(
                                        <div className="col-6">
                                            <div className="whycard my-3 me-lg-3 position-relative">
                                                <div className='sideBox'></div>
                                                <div>
                                                    <img src={wData[0].whyPath+v.image} alt={v.alt_image_text}/>
                                                    <h3 className='fw-bold mt-2 fs-4 mt-3'>
                                                        {v.title}
                                                    </h3>
                                                    <span className='whyline'></span>
                                                    <p className="text-fix mt-4">
                                                        {v.short_description}
                                                    </p>
                                                    <div className='mt-3'>
                                                        <span className='aboutpart'>
                                                                Read More
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                               :  
                                <div className='col-12'>
                                    No Data Found
                                </div>
                            }
                            </div>
                      </div>

                    {/* This Slider For the Mobile View Only */}

                      <div className='d-block d-lg-none ms-3'>
                        <Slider {...settings}>
                             {wData.length >= 1 
                                ?
                                  wData[0].whyData.map((v)=>{
                                        return(
                                            <div className="cards">
                                                <div className="row"> 
                                                    <div className="col-11">
                                                        <div className="whycard my-3 me-lg-3 position-relative">
                                                            <div className='sideBox'></div>
                                                            <div>
                                                                <img src={wData[0].whyPath+v.image} alt={v.alt_image_text}/>
                                                                <h3 className='fw-bold mt-2 fs-4 mt-3'>
                                                                    {v.title}
                                                                </h3>
                                                                <span className='whyline1'></span>
                                                                <p className="text-fix mt-5">
                                                                    {v.short_description}
                                                                </p>
                                                                <div className='mt-3'>
                                                                    <span className='aboutpart'>
                                                                            Read More
                                                                    </span>
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
                                        No Data Found
                                    </div>
                             }     
                        </Slider>
                      </div>
                  </div>
             </div>
          </div>
        </div> 
    </>
  )
}
