import React from 'react'
import { useSelector } from 'react-redux'
import Itemcards from './Itemcards';
import { clearCart } from '../utils/slice';
import { useDispatch } from 'react-redux';
function Contact() {
  let selector=useSelector((state)=>state.items);
  let dispatch=useDispatch();
  console.log(selector)
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div onClick={()=>{
        dispatch(clearCart())
      }} className='cursor-pointer'>
      <button className='  bg-black p-2 rounded-lg m-2 text-white text-2xl font-bold'>Clear Cart</button>
      </div>
    <div className='w-6/12 '>
      {
        selector.map((val,indx)=>{
          return(
            <Itemcards data={val}></Itemcards> 
          )
         
        })
      }
    </div>
    </div>
  )
}

export default Contact