import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import "../style/download.css"
import Footer from "../component/Footer"
import Navbar from '../component/Navbar'

const Download = () => {

     const navigate = useNavigate();
     const token = localStorage.getItem('token');

     const handledAYODHYA = () => {
          if (token === null) {
               navigate("/Login")
          } else {
               navigate("/form");
          }
     }

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
                              </tr> <br />
                              <tr>
                                   <td>AUTONOMOUS MEDICAL COLLEGE, AYODHYA</td>
                                   <td>2022</td>
                                   <td><span onClick={handledAYODHYA} >Download</span></td>
                              </tr>

                              <tr>
                                   <td> AUTONOMOUS MEDICAL COLLEGE, SIDDHARTH NAGAR</td>
                                   <td>2022</td>
                                   <td><span>Download</span></td>
                              </tr>

                              <tr>
                                   <td>MOTI LAL NEHRU MEDICAL COLLEGE, PRAGYRAJ</td>
                                   <td>2022</td>
                                   <td><Link to="/Login" >Download</Link></td>
                              </tr>
                              {/* BABA RAGHAVDAS MEDIAL COLLEGE, GORAKHPUR */}
                              <tr>
                                   <td>BABA RAGHAVDAS MEDIAL COLLEGE, GORAKHPUR</td>
                                   <td>2022</td>
                                   <td><Link to="/Login" >Download</Link></td>
                              </tr>

                              <tr>
                                   <td>MAHARANI LAXMIBAI MEDICAL COLLEGE, JHANSI</td>
                                   <td>2022</td>
                                   <td><Link to="/Login" >Download</Link></td>
                              </tr>

                              <tr>
                                   <td>MEDICAL COLLEGE, AZAMGARH</td>
                                   <td>2022</td>
                                   <td><Link to="/Login" >Download</Link></td>
                              </tr>

                              <tr>
                                   <td>GANESH SHANKER VIDHARTHI MEMORIAL MEDICAL COLLEGE, KANPUR</td>
                                   <td>2022</td>
                                   <td><Link to="/Login" >Download</Link></td>
                              </tr>

                              <tr>
                                   <td>SAROJINI NAIDU MEDICAL COLLEGE, AGRA</td>
                                   <td>2022</td>
                                   <td><Link to="/Login" >Download</Link></td>
                              </tr>
                         </table>
                    </div>
               </div>
               <Footer />
          </>
     )
}

export default Download
