import React from 'react'
import '../App.css'
function Cards({data}) {
    // console.log(data)
    let {cloudinaryImageId,locality,areaName,costForTwo,name,sla}=data?.info;
    // console.log(cloudinaryImageId)
  return (
    <>
    <div className='h-[350px] w-96  my-5 rounded-lg overflow-hidden border border solid border-black'>
    <img className='h-52 w-full' alt='Food-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}>
    </img>
    <div className='p-[10px]'>
    <h3>
            {name}
        </h3>
        <h4>
        {locality}
        </h4>
        <h5>
        CostForTwo:{costForTwo} 
        </h5>
        <h5>
        Delivery Time:    {sla.deliveryTime} mins
        </h5></div>
    </div>
    </>
  )
}

export default Cards