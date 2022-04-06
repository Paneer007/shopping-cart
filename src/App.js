import {Link,BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import axios from 'axios';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Checkout from './components/Checkout';
import { useEffect, useState } from 'react';
import CatalogItemView from './components/CatalogItemView';
const DisplayResult=({imageData,setSearchFilter})=>{
    return(
      <div>
        <p>{imageData.user.name}</p>
        <Link onCLick={()=>setSearchFilter('')} to={`/catalog/${imageData.id}`}>Link To Page</Link>
      </div>
    )
}
function App() {
  const RandomPrice =()=> Math.floor(Math.random() * 9000) + 1000
  const [imageList,setImageList]=useState([])
  const [userShoppingCart,setUserShoppingCart]=useState({})
  const [countOfItem,setCountOfItem]=useState(0)
  const [searchFilter,setSearchFilter]=useState(null)
  useEffect(()=>{
    const fetchData =async()=>{
        const response1 = await axios.get('https://api.unsplash.com/search/photos/?client_id=gH-fpaQSEHTHvDjtKznfrbkVetOrxR8YkWqEt02uxK0&query=art&per_page=50')
        let finalSetOfImages=[...response1.data.results]
        finalSetOfImages=finalSetOfImages.map(x=>Object.assign(x,{price:RandomPrice()}))
        setImageList(finalSetOfImages)
    }
    fetchData()
  },[])
  const searchResult=imageList.filter(x=>x.user.name.includes(searchFilter))
  console.log(searchResult)
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/home'>Home</Link>
          <div>
            <input onChange={(e)=>setSearchFilter(e.target.value)} placeholder="Enter something to search"></input>
            <div className={`${searchResult.length===0?'hidden':'visible'}`} id='searchFilter'>
              {imageList.map(x=>x.user.name.includes(searchFilter)&&searchFilter!==''?<DisplayResult setSearchFilter={setSearchFilter} imageData={x}/>:null)}
            </div>
          </div>

          <div> 
            <Link to='/catalog'>Catalog</Link>
            <Link to='/cart' >Cart-{countOfItem}</Link>  
          </div>
          
        </div>
        <Routes>
          <Route path="/" element={<Navigate replace to='/home'/>}/>
          <Route path="/home" element={<Home imageList={imageList} />}/>
          <Route path='/cart' element={<Checkout item={imageList} userItem={userShoppingCart}/>}/>
          <Route path='/catalog' element={<Catalog imageList={imageList} userCart={userShoppingCart} setUserCart={setUserShoppingCart}/>}/>
          {imageList.length===0?null:imageList.map(x=><Route path={`/catalog/${x.id}`} element={<CatalogItemView item={x} userCart={userShoppingCart} setUserCart={setUserShoppingCart}/>}/>)}
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
