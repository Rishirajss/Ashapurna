import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slides({sData}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
  return (
    <>
         <div className="slider-container container mt-5">
                <Slider {...settings}>
                    {sData.length >= 1 
                    ?
                        sData[0].sliderdata.map((v)=>{
                            return(
                                <div className="card">
                                    <img src={sData[0].sliderpath+v.image} width="100%" alt=""/>
                                </div>
                            )
                        })
                    :
                        <div className="card">
                            No Image Fonund
                        </div>
                        
                    }

                </Slider>
             </div>  
    </>
  )
}
