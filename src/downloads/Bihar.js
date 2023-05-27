import React from 'react'
import { Link } from 'react-router-dom'
import "../style/download.css"
import Footer from "../component/Footer"
import Navbar from '../component/Navbar'

const Download = () => {
     const token = localStorage.getItem('token');

     return (
          <>
               <Navbar />
               <div className='container'>
                    <div className='colleges'>
                         <table>
                              <tr>
                                   <th>State</th>
                                   <th>Year</th>
                                   <th>Option</th>
                              </tr>
                              <tr>
                                   <td>KGF</td>
                                   <td><Link to="/Login" >Download</Link></td>
                                   <td>2022</td>
                              </tr>
                         </table>
                    </div>
               </div>
               <Footer />
          </>
     )
}

export default Download
