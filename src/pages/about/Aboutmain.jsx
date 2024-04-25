import React from 'react'
import { Header } from '../../comman/Header'
import { Footer } from '../../comman/Footer'
import Abouthead from './Abouthead'
import Aboutparag from './Aboutparag'
import Aboutprojects from './Aboutprojects'
import Ourmission from './Ourmission'
import Achivement from './Achivement'

export default function Aboutmain() {
  return (
    <>
      <Header/>
            <Abouthead/>
            <Aboutparag/>
            <Aboutprojects/>
            <Ourmission/>
            <Achivement/>
      <Footer/>  
    </>
  )
}
