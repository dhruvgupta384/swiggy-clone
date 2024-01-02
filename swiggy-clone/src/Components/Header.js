import React from "react"
import { Link } from "react-router-dom"
// import '../App.css'
export default function Header(){
    return(
      <div className='header'>
        <div className='logo'>
        <img alt='App-icon' src='https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256'></img>
   </div>
    <div className='nav-items'>
    <ul>
     <Link to='/'> <li>
        Home
      </li></Link>
     <Link to='/about'> <li>
        About US
      </li>
      </Link>
     <Link to='/contact'> <li>
        Contact Us
      </li></Link>
    <Link to='/contact'> <li>
        Cart
      </li></Link>
     </ul>
    </div>
   
      </div>
    )
  }