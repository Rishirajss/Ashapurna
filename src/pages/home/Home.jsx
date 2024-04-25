import React, { useEffect, useState } from 'react'
import { Header } from '../../comman/Header'
import { Footer } from '../../comman/Footer'
import axios from 'axios';
import { About } from './About';
import Slides from './Slides';
import Whyus from './Whyus';
import Ourwork from './Ourwork';
import Project from './Project';
import Meadias from './Meadias';
import { baseUrl } from './Apibaseurl';

export default function Home() {

    let[slideData,setslideData] = useState([]);
    let[aboutData,setaboutData] =  useState([]);
    let[aboutinfo,setaboutinfo] =  useState([]);
    let[whyData,setwhyData] = useState([]);
    let[workData,setworkData] = useState([]);
    let[ourprojectData,setourprojectData] = useState([]);
    let[mediatData,setmediaData] = useState([]);

    let homeData=()=>{
        let apiUrl = baseUrl + 'home';
        axios.get(apiUrl)
             .then((res)=>{
                return res.data;
             })
             .then((finalRes)=>{
//------------------------------ For the Slider Section Data -------------------------------------------------------

                let finalSliderData={
                    'sliderpath': finalRes._data.slider_image_path,
                    'sliderdata': finalRes._data.getSliders   
                }
                let fData=[finalSliderData];
                setslideData(fData);

//------------------------------ For the Slider Section Data -------------------------------------------------------


//------------------------------ For the About Section Data -------------------------------------------------------

                let finalAboutData={
                    'aboutPath': finalRes._data.about_us_image_path,
                    'aboutData': finalRes._data.aboutUs
                }

                let aboutSectionData=[finalAboutData];
                setaboutData(aboutSectionData);
                
                let finalAboutInfo={
                    'aboutPath':finalRes._data.about_us_image_path,
                    'aboutDetails': finalRes._data.getHomePage
                }

                let aboutDetailsSection = [finalAboutInfo];
                setaboutinfo(aboutDetailsSection);

//------------------------------ For the About Section Data -------------------------------------------------------

//------------------------------ For the Why Us Section Data -------------------------------------------------------
    
        let finalWhyData={
            'whyPath': finalRes._data.why_choose_us_image_path,
            'whyData': finalRes._data.getWhyChooseUs
            }

            let finalWData = [finalWhyData];
            setwhyData(finalWData);

//------------------------------ For the Why Us Section Data -------------------------------------------------------


//------------------------------ For the Our Work Section Data -------------------------------------------------------

            let finalwork={
                'workPath':finalRes._data.project_image_path,
                'workData':finalRes._data.getFeaturedProjects,
                'workAmenities': finalRes._data.amenities_image_path,
                'AmenitiesData':finalRes._data.getFeaturedProjects[0].amenities
            }
                let finalworkData=[finalwork]
                setworkData(finalworkData);

//------------------------------ For the Our Work Section Data -------------------------------------------------------


//------------------------------ For the Our Work Section Data -------------------------------------------------------

                let finalprojects={
                    'projectPath': finalRes._data.project_image_path,
                    'projectData': finalRes._data.getProjects 
                }

                let finalprojectsData=[finalprojects];
                setourprojectData(finalprojectsData);

//------------------------------ For the Our Work Section Data -------------------------------------------------------


//------------------------------ For the Our Work Section Data -------------------------------------------------------

                let finalmedia={
                    'mediaPath': finalRes._data.utsav_camps_image_path,
                    'mediaData': finalRes._data.getUtsavCamps
                }
                let finalmediaData=[finalmedia];
                setmediaData(finalmediaData); 

//------------------------------ For the Our Work Section Data -------------------------------------------------------

        })
    }
    useEffect(()=>{
            homeData();
    },[])
    
  return (
    <>
        <Header/>  
            <Slides sData={slideData}/>            
            <div className="info container w-100 d-none d-lg-block bg-white mx-auto">
                      <form className="searchForm">
                            <div className="justify-content-center align-items-end row">
                                <div className="mb-1 mb-lg-0 col">
                                    <input placeholder="Name" name="searchname" type="text" id="searchname" class="rounded-1 fs-16 form-control form-control-lg" value=""/>
                                </div>
                                <div className="mb-1 mb-lg-0 col">
                                    <input placeholder="Email" name="searchname" type="text" id="searchname" class="rounded-1 fs-16 form-control form-control-lg" value=""/>
                                </div>
                                <div className="mb-1 mb-lg-0 col">
                                    <input placeholder="Phone" name="searchname" type="text" id="searchname" class="rounded-1 fs-16 form-control form-control-lg" value=""/>
                                </div>
                                <div className="mb-1 mb-lg-0 col">
                                    <select class="rounded-1 text-black form-select form-select-lg"> 
                                            <option>Select Property</option>
                                            <option value="Ashapurna Mohan Bagh">Ashapurna Mohan Bagh</option>
                                            <option value="Ashapurna Girls Hostel Mumbai">Ashapurna Girls Hostel Mumbai</option>
                                            <option value="Ashapurna NRI Phase 2">Ashapurna NRI Phase 2</option>
                                            <option value="Buddha Institutions">Buddha Institutions</option>
                                            <option value="Ashapurna Clarks Inn">Ashapurna Clarks Inn</option>
                                            <option value="Ashapurna NRI">Ashapurna NRI</option>
                                            <option value="Ashapurna Crown Plaza">Ashapurna Crown Plaza</option>
                                    </select>
                                </div>
                                <div className="mb-1 mb-lg-0 col">
                                    <input placeholder="Name" name="searchname" type="text" id="searchname" class="rounded-1 fs-16 form-control form-control-lg" value=""/>
                                </div>
                                <div class="mb-1 mb-lg-0 col-lg-12 col-xl-auto col">
                                    <button type="button" class="searchname bg-golden-color fw-400 w-100 rounded-1 border-0 text-white fs-18 btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </form>
            </div>
            <About aboutUsData={aboutData} aboutinfoData={aboutinfo}/>
            <Whyus wData={whyData} whyinfo={aboutinfo}/>
            <Ourwork ourwork={workData} ourworkinfo={aboutinfo}/>
            <Project ourprojectdetails={ourprojectData} projectinfo={aboutinfo}/>
            <Meadias mediadetails={mediatData}/>
        <Footer/>      
    </>
  )
}
