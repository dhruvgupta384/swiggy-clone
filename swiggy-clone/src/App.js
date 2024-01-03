import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Cards from './Components/Cards';
import Header from './Components/Header'
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useOnlinestatus from './utils/useOnlinestatus';
function App() {
  const searchText = useRef();
  const [cardsData, setcardsData] = useState();
  const [resultData, setresultData] = useState()
  const getapi = () => {
    axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.4540701&lng=76.5818851&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING').then((res) => {
      setresultData(res.data.data.cards?.[3].card.card.gridElements.infoWithStyle.restaurants)
      setcardsData(res.data.data.cards?.[3].card.card.gridElements.infoWithStyle.restaurants)
    })
  }

  useEffect(() => {
    getapi()
    // updateAPI()
  }, [])

  const updateAPI = () => {
    let obj = {
      lat: 30.4540701,
      lng: 76.5818851
    }
    axios.post("https://www.swiggy.com/dapi/restaurants/list/update", obj)
      .then((res) => {
        console.log(res.data)
      })
  }
  const showsearchResult = () => {
    let ans = cardsData.filter((val) => {
      console.log(val.info.name)
      return val?.info.name.toLowerCase().includes(searchText.current.value.toLowerCase());
    })
    setresultData(ans)
    console.log(ans, searchText.current.value);
  }

  const isOnline = useOnlinestatus();
  if (!isOnline) {
    return <h1>No Internet</h1>
  }


  return (
    <div className="App">
      {/* <Header/> */}
      <div className="flex">
        <input className='p-1 border border-solid border-black rounded-lg' ref={searchText} type='text'></input>
        <button className='border bg-yellow-300 rounded-lg text-zinc-950 px-5 mx-5 text-[20px]' onClick={() => showsearchResult()}>Search Text</button>
      </div>
      <div className='flex align-center justify-between flex-wrap'>
        {
          resultData?.map((val) => {
            return (
              <Link to={/restaurants/ + val.info.id}>  <Cards data={val} /></Link>
            )
          })
        }</div>

    </div>
  );
}

export default App;
