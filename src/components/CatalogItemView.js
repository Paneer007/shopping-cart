import { useState } from "react"

const CatalogItemView=({setItem,item,setUserCart,userCart})=>{
    const [count,setCount]=useState(userCart[item.id]==null?0:userCart[item.id])
    const addItemToCart=(num)=>{
        const itemTemp={}
        itemTemp[item.id]=Number(num)
        setUserCart(Object.assign(userCart,itemTemp))
        setCount(num)
    }
    return(
        <div>
            <p>Image description</p>
            <div>
                <span>Enter number of quantity: </span>
                <input type="Number" min="0" default='0' className="border-2 border-black-700" onChange={(e)=>addItemToCart(e.target.value)}></input>
                <br/>
            </div>
            
            <button onClick={()=>addItemToCart()}>Add to cart</button>
            <p>Count-{count}</p>
        </div>
    )
}
export default CatalogItemView