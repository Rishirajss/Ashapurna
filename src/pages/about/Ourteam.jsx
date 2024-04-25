import React from 'react'
import organisationChart from '../../img/organisation-chart.jpg'
import { Link } from "react-router-dom";
import { Header } from '../../comman/Header';
import { Footer } from '../../comman/Footer';

export default function Ourteam() {
  return (
    <>
       <Header/>
                <div className="about-main">
                    <div className="conatiner-fluid px-0">
                            <div className="text-center text-white fs-5">
                                    <span>
                                        <Link to="/">HOME</Link> /
                                    </span>
                                    <span>
                                        <Link to="#"> OUR TEAM </Link>
                                    </span>
                            </div>
                            <h2 className="text-center aboutheadstyle fw-bold mt-1">
                                Our Team
                            </h2>    
                    </div>   
                </div>
                <section class="team-main py-lg-5 py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="team-wrapper mb-60">
                                    <h1 class="blue-color fs-3 fw-bold text-center mb-25">Ashapurna Team</h1>
                                    <div class="teamContent text-color lh-24 fs-14 text-lg-center mt-4">
                                        <p style={{textAlign: "justify"}}>
                                            Shri Karan Singh Uchiyarda, the Founder Chairman &amp; Managing Director of Ashapurna Buildcon, is a man with crystal-clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpur's real estate scene. Acceptance and popularity of Ashapurna's projects are proof of his passion, skill, and hard work. Besides real estate, Shri Karan Singh Uchiyarda is a known figure in the hospitality sector as well.
                                        </p>
                                        <p style={{textAlign: "justify"}}>
                                            On one hand, Shri Karan Singh Uchiyarda is a respected name in the Jodhpur's business circle, on the other, he is known for giving back to society through his trust Shree Mag Mohan Charitable Trust. His social welfare work includes medical camps, large-scale marriage functions, housing, and other donation for the poor and needy. What's more, in a very unique and commendable CSR initiative, Ashapurna Buildcon provides a free home to a widow in every project which in itself is living proof of Shri Karan Singh Uchiyardas concern towards the less privileged section of society.
                                        </p>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <img src={organisationChart} class="img-fluid" alt="Our Team Chart"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
       <Footer/>  
    </>
  )
}
