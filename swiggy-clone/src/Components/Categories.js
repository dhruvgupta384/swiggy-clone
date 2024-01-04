import React from 'react'
import Itemcards from './Itemcards'
import { useState } from 'react'
function Categories({indx,category,showitems,setshowitems}) {
    // console.log(category)
    
    return (
        <div className='w-6/12 rounded-xl mx-auto my-6 bg-gray-100 shadow-lg p-6 flex flex-col cursor-pointer'>
            <div className='flex justify-between' onClick={()=>setshowitems(indx)}>
            <p className='text-center font-bold'>{category.title}({category.title.length})</p>
            <span>
                <img className='w-5' src='https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/1024px/2b07.png'></img>
            </span>
            </div>
            {showitems&&<div className='flex flex-col pt-[10px] text-left'>
            {
                category?.itemCards?.map((val, indx) => {
                    console.log(val.card)
                    return (
                        <Itemcards data={val.card.info}></Itemcards>
                    )
                })
            }</div>}

        </div>
    )
}

export default Categories