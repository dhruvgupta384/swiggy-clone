import React from 'react'
// import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
import useOnlinestatus from '../utils/useOnlinestatus';
import Categories from './Categories';
function Resmenu() {
    // console.log(Params)
    let params=useParams();
    // console.log(params)
    const [menu, setmenu] = useState()
    const [showitems, setshowitems] = useState(-1)
    
    const callmenuapi=()=>{
        axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.4540701&lng=76.5818851&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER`)
        .then((res)=>{
            setmenu(res.data);
            // console.log( res.data.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[3].card.card.itemCards)
            
        })
    }
    useEffect(()=>{
        callmenuapi()
    },[])
    if(menu ==null){
        return
    }
    const { name,city,areaName,costForTwoMessage }= menu?.data?.cards[0]?.card?.card?.info
    const {itemCards} = menu.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[3].card.card
//    let {name}= menu?.data?.cards[0]?.card?.card?.info
    let categories=menu?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.filter((val)=>
        // console.log("ds",val.card.card)
        val.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    // console.log("d",categories)

  return (
    <div className='text-center'>
        <h1 className='font-bold text-4xl my-4'>{name&&name} Menu Card</h1>
        <p className='text-3xl my-5'>{city},{areaName}</p>
        <p className='text-xl font-semibold'>Cost for Two:{costForTwoMessage}</p>
        {/* <h2 className='text-2xl my-4'>
            Menu Card
        </h2> */}
        {console.log(itemCards)}
        <ul>
            {/* {
                itemCards?.map((val,indx)=>{
                    return(
                        <li>
                        {val.card.info.name}-Rs.{ val.card.info.price/10}
                        </li>
                    )
                })
            } */}
            {
                categories?.map((val,indx)=>{
                    return(
                        <li key={indx}>
                            <Categories indx={indx} showitems={showitems} setshowitems={setshowitems} category={val.card.card}></Categories>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Resmenu