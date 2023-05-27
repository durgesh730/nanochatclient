import React, { useEffect } from 'react'
import '../style/neet.css'
import neetpic from '../images/Analytics-amico.png'
import { Link } from 'react-router-dom'
import Footer from '../component/Footer'
import SocialMedia from '../component/SocialMedia'
import Navbar from '../component/Navbar'


const Neet = () => {

  return (
    <>
     <Navbar/>
      <SocialMedia/>
      <div className='container '>
        <div className='block'>
          <div className='topics' data-aos="fade-down-right" >
            <h1>Choose Your Subject and  <br /> get start Practice </h1>
            <div className='my-4'>
              <Link className='chem' to={"/chem"}>chemistry</Link>
              <Link className='phy' to='/phy' >Physics</Link>
              <Link className='bio' to='/bio'>Biology</Link></div>
          </div>

          <div className='gredimg' data-aos="fade-down-left">
            <img src={neetpic} alt="img" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Neet
