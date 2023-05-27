import React, { useEffect } from 'react'
import '../style/body.css';
import imgaes from '../images/landing page.png'

import Cards from './Cards';
import Tables from './Tables';

import Footer from './Footer';
import Videos from './Videos';
import Notification from './Notification';
import Myself from './Myself';
import { Link } from 'react-router-dom';
import Navbar from "../component/Navbar";
import SocialMedia from './SocialMedia';


const Body = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='imgpara' >
          <div className='Text' data-aos="fade-down-right">
            <div className='textone' ><span>Our Objective is to provide</span></div>
            <div className='textsecond' ><span>Quality Education</span></div>
            <div className='textthird' ><small>we effort to improve the ability to think and euip them with specialized </small></div>
            <div className='textfourth' ><small>skill usefil in differentareas of medical, engineering and others</small></div>
            <div className='textButton'>
              <Link className='btn' to="form" >Counselling Form</Link>
            </div>
          </div>
          <div className='img' data-aos="fade-down-left">
            <img src={imgaes} alt="images" ></img></div>
        </div>
      </div>

      <div className='chennels '>
        <div className='container'>
          <div>
            <h1>5000K</h1>
            <small>Subscribers</small><br/>
            <a href=''> on Youtube</a>
          </div>

          <div class="vl"></div>
          <div>
            <h1>2090K</h1>
            <small>Followers</small><br/>
            <a href=''> on Instagram </a>
          </div>

          <div class="vl"></div>
          <div>
            <h1>3876K</h1>
            <span> Followers </span><br/>
            <a href=''> on Twiter </a>
          </div>
        </div>
      </div>
      
      <SocialMedia />
      <Cards />
      <Notification />
      <Tables />
      <Myself />
      <Videos />
      <Footer />

    </>
  )
}

export default Body
