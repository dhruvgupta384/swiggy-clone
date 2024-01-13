import React from "react"
import { Link } from "react-router-dom"
// import '../App.css'
import { useSelector } from "react-redux"
export default function Header(){
  let obj=useSelector((state)=>state.items);
  console.log(obj)
    return(
      <div className='flex w-94 border border-solid border-black justify-between items-center bg-green-200 shadow-xl'>
        <div className='w-20 m-2'>
        <img alt='App-icon' src='https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256'></img>
   </div>
    <div>
    <ul className="flex">
     <Link className='p-3' to='/'> <li>
        Home
      </li></Link>
     <Link className='p-3' to='/about'> <li>
        About US
      </li>
      </Link>
     <Link className='p-3' to='/contact'> <li>
        Contact Us
      </li></Link>
    <Link className='p-3' to='/contact'> <li>
        Cart ({obj.length} Items)
      </li></Link>
     </ul>
    </div>
   
      </div>
    )
  }