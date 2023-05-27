import React from 'react'
import '../style/video.css'

const Videos = () => {

    return (
        <>
            <div className='container'>
                <div className="Details">
                    <div className='text-center'>
                        <h3 className='font-weight-bold'>Counselling Videos</h3></div>
 
                    <div className='yotubeVideo' data-aos="fade-up">
                        <div className='Youtube' >
                            <div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item " src="https://www.youtube.com/embed/7CLzzaN0fis"></iframe>
                            <div> <a href="">AIIMS Rishikesh NEET Cut Off Marks & Rank 2021</a></div>
                            <div className="Button"><a href='#' className='  btn '>More Videos</a></div></div>
                        </div>

                        <div className='Youtube'>
                            <div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zQctksj18dw"></iframe></div>
                            <div><a href=" ">SMS Medical College Jaipur Fee structure & cut off 2021</a></div>
                            <div className='Button'><a href='#' className='  btn '>More Videos</a></div>
                        </div>

                        <div className='Youtube'>
                            <div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wb9tHoQr5L8"></iframe></div>
                            <div><a href=''>AIIMS Nagpur V/S AIIMS Kalyani Which one is best</a></div>
                            <div className='Button'><a href='#' className='  btn'>More Videos</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Videos
