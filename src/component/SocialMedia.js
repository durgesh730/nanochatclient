import React from 'react'
import { BsYoutube, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';

const SocialMedia = () => {
    return (
        <>
            <section>
                <div className='socialMediaLogo' id='phonemedia'>
                    <div className='youtube'><a href='https://www.youtube.com/@nanochat' target='black'><BsYoutube /></a></div>
                    <div className='linkdin'><a href='/' target='black'><BsLinkedin /></a></div>
                    <div className='instagram'><a href='https://www.instagram.com/_durgesh.chaudhary/' target='black'><SiInstagram /></a></div>
                    <div className='gmail'><a href='/' target='black'><BsTwitter /></a></div>
                </div>
            </section>
        </>
    )
}

export default SocialMedia
