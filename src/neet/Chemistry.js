import React from 'react'
import '../style/question.css'
import Quiz from './Quiz'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function Chemistry() {

    return (
        <>
             <Navbar/>
            <Quiz />
            <Footer />
        </>
    )
}
