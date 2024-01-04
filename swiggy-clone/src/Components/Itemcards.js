import React from 'react'

function Itemcards({data}) {
    console.log(data.imageId)
  return (
    <div className='flex w-full justify-between items-center pb-5 border-b-4 my-2'>
        <div className='w-6/12 flex justify-between flex-col'>
        <p>
            {data.name}
        </p>
        <p>
            {data.description}
        </p>
        </div>
        <div className='w-4/12 relative'>
            <img className='h-36 w-full' alt='Image Not Available' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data.imageId}`}></img>
            <div className='mx-20 my-2 w-20 p-1 absolute flex rounded-lg justify-center bg-slate-400 bottom-0'>
            <button>ADD +</button>
        </div>
        </div>
        
    </div>
  )
}

export default Itemcards