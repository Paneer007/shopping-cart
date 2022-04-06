import { useState } from "react"
import { Link } from "react-router-dom"

const CatalogCard =({object,userCart,setUserCart})=>{    
    const [isAdd,setIsAdd]=useState(false)
    const [count,setCount]=useState(userCart[object.id]==null?0:userCart[object.id])
    const addItemToCart=(e)=>{
        let num=e.target.value
        console.log(typeof(num))
        if(typeof(num)===Object){
        }else{
            if(num===undefined){
                num=1
                console.log('hi')
            }
            const itemTemp={}
            itemTemp[object.id]=Number(num)
            setUserCart(Object.assign(userCart,itemTemp))
            setCount(num)
        }
    }
    console.log(userCart[object.id])
    console.log('fhjhsjk')
    return(
        <div className="h-96 w-96 mt-8 mb-8 flex flex-col ">
            <img className="h-72 w-72"src={object.urls.small}/>
            <div>
                <p>Made by-{object.user.name}</p>
                <p>Price: {object.price}</p>
                {userCart[object.id] === undefined?<p onClick={addItemToCart}>Add</p>:(<input type="Number" min="1" className="border-2 border-black-700" value={userCart[object.id]} onChange={addItemToCart}></input>)}
                <Link to={`/catalog/${object.id}`}>Learn More</Link>
            </div>
        </div>
    )
}
const Catalog=({imageList,userCart,setUserCart})=>{
    return(
        <div className="flex flex-row flex-wrap justify-center">
            {imageList.map(x=><CatalogCard object={x} userCart={userCart} setUserCart={setUserCart}/>)}
        </div>
    )
}
export default Catalog