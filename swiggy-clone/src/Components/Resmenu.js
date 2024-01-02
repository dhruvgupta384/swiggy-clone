import React from 'react'
// import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
function Resmenu() {
    // console.log(Params)
    let params=useParams();
    // console.log(params)
    const [menu, setmenu] = useState()
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
    const { name,city,areaName }= menu?.data?.cards[0]?.card?.card?.info
    const {itemCards} = menu.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[3].card.card
//    let {name}= menu?.data?.cards[0]?.card?.card?.info

  return (
    <div>
        <h1>{name&&name} Menu Card</h1>
        <p>{city},{areaName}</p>
        <h2>
            Menu Card
        </h2>
        {console.log(itemCards)}
        <ul>
            {
                itemCards?.map((val,indx)=>{
                    return(
                        <li>
                        {val.card.info.name}-Rs.{ val.card.info.price/10}
                        </li>
                    )
                })
            }
            
        </ul>
    </div>
  )
}

export default Resmenu