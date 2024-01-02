import React from 'react'
// import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
function Resmenu() {
    // console.log(Params)
    let params=useParams();
    // console.log(params)
    const [menu, setmenu] = useState()
    const callmenuapi=()=>{
        axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.4540701&lng=76.5818851&restaurantId=${params.res}&catalog_qa=undefined&submitAction=ENTER`)
        .then((res)=>{
            setmenu(res.data);
        })
    }
  return (
    <div>Resmenu</div>
  )
}

export default Resmenu