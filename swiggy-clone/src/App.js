import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Cards from './Components/Cards';
import Header from './Components/Header'
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <div className="App">
      {/* <Header/> */}
      <div style={{ display: 'flex', marginTop: "10px" }}>
        <input ref={searchText} type='text'></input>
        <button onClick={() => showsearchResult()}>Search Text</button>
      </div>
      <div className='cardsWrap'>
        {
          resultData?.map((val) => {
            return (
          <Link to={/restaurants/+val.info.id}>  <Cards data={val} /></Link>  
            )
          })
        }</div>

    </div>
  );
}

export default App;
