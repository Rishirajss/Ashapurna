import React from 'react'
import { Link } from "react-router-dom";

export default function Abouthead() {
  return (
    <>
      <div className="about-main">
               <div className="conatiner-fluid px-0">
                    <div className="text-center text-white fs-5">
                            <span>
                                <Link to="/">HOME</Link> /
                            </span>
                            <span>
                                <Link to="#"> ABOUT US</Link>
                            </span>
                    </div>
                    <h2 className="text-center aboutheadstyle fw-bold mt-1">
                        About Us
                    </h2>    
               </div>   
          </div>  
    </>
  )
}
