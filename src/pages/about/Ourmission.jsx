import React from 'react'
import vission from '../../img/icon_img/ourvision.png'
import mission from '../../img/icon_img/ourmission.png'

export default function Ourmission() {
  return (
    <>
        <section class="missionVision-main">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="ourmission bg-white py-3 py-lg-0 me-lg-1 mb-3 mb-lg-0">
                            <div class="m-0 align-items-center row">
                                <div class="p-0 col-lg-4">
                                    <div class="ourmission-image mb-3 mb-lg-0 text-center">
                                        <img src={vission} alt="Our Vision" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="pe-0 col-lg-8">
                                    <div class="ourmission-content d-flex py-lg-3 py-xl-0 align-items-center h-100">
                                        <div class="ps-2 pe-1">
                                            <h3 class="light-blue-color position-relative fs-5 text-uppercase fw-bold mt-2"> Our Vision </h3>
                                            <div class="text-color fw-400 mb-0 lh-24 fs-14">
                                                <p> To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="ourmission bg-white py-3 py-lg-0 ms-lg-1 mb-3 mb-lg-0">
                            <div class="m-0 align-items-center row">
                                <div class="p-0 col-lg-4">
                                    <div class="ourmission-image mb-3 mb-lg-0 text-center">
                                        <img src={mission} alt="Our Mission" class="img-fluid"/>
                                    </div>
                                </div>
                                <div class="pe-0 col-lg-8">
                                    <div class="ourmission-content d-flex py-lg-3 py-xl-0 align-items-center h-100">
                                        <div class="ps-2 pe-1">
                                            <h3 class="light-blue-color position-relative fs-5 text-uppercase fw-bold mt-2">Our Mission</h3>
                                            <div class="text-color fw-400 mb-0 lh-24 fs-14">
                                                <p>To offer quality and refined workmanship in both product and service plus maintain the highest level of professionalism while dealing with customers, employees and associates.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
