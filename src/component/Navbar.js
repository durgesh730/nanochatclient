import React, { useState } from 'react'
import "../style/navbar.css"
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BsArrowReturnLeft, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md'

// for reset value of result
import { useDispatch } from 'react-redux';
import { resetALLAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';


const Navbar = () => {

  const dispatch = useDispatch();
  var [isShown] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const handleClick = () => {
    if (isShown === false) {
      document.getElementById('SideNav').style.width = "170px"
      isShown = true;
    } else {
      document.getElementById('SideNav').style.width = "0px"
      isShown = false;
    }
  };


  function handledropdown() {
    if (dropdown === false) {
      document.getElementById("profileOption").style.height = "fit-content";
      setdropdown(true);
    } else {
      document.getElementById("profileOption").style.height = "0px";
      setdropdown(false);
    }
  }

  const CloseNav = () => {
    document.getElementById('SideNav').style.width = "0px"
  }


  const token = localStorage.getItem('token');
  const userData = localStorage.getItem('user');
  const users = JSON.parse(userData);


  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    toast("You are Logged Out successfully", {
      autoClose: 3000,
    })
  }

  const onReset = () => {
    dispatch(resetALLAction())
    dispatch(resetResultAction());
  }


  return (
    <>
      <div className='Navbar'>
        <div className='container'>
          <nav>
            <div className='logo'><Link to="/" onClick={onReset} >Nano chat</Link></div>
            <div className='RightNav'>
              <Link to='/neet' className='neettab' >NEET</Link>
              <Link to='/login' className='logintab' >Login</Link>
              <Link to='/signup' className='signuptab' > Signup <BsBoxArrowRight /> </Link>
              <span onClick={handledropdown} className='avtar' to='/signup'><BsFillPersonFill /><small >{users ? users.fname : "No Login "} <MdKeyboardArrowDown /> </small> </span>
              <span className='Bars' onClick={handleClick}><FaBars /></span>
            </div>
          </nav>
        </div>

        <div className="profile-options" id="profileOption">
          <ul>
            <li>
              <Link style={{ cursor: "pointer" }} to="/profiledetails"  >My Profile</Link>
            </li>
            <li >
              <Link onClick={handleLogout} id='logout' >Logout</Link>
            </li>
          </ul>
        </div>

        <div className='Sidenav' id='SideNav'>
          <span onClick={CloseNav} id="Close" style={{ fontSize: "1.5rem" }} ><BsArrowReturnLeft /></span>
          <Link to='/signup'><BsFillPersonFill /><small >{users ? users.fname : "No Login "}</small> </Link>
          <Link to='/'>Home</Link>
          <Link to='/neet' onClick={onReset} >NEET</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link onClick={handleLogout} id='logout' >Logout</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
