import { useState } from "react"

const CatalogItemView=({item,setUserCart,userCart})=>{
    const [count,setCount]=useState(0)
    const addItemToCart=()=>{
        console.log('hello World')
        const itemTemp={}
        itemTemp[item.id]=count+1
        setUserCart(Object.assign(userCart,itemTemp))
        setCount(count+1)
    }
    console.log(userCart)
    return(
        <div>
            <p>ComeBack and finish this noob</p>
            <button onClick={()=>addItemToCart()}>Add to cart</button>
            <p>Count-{count}</p>
        </div>
    )
}
export default CatalogItemView