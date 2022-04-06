const CheckoutItemFunction =({item,count})=>{
    //add some final quantity editor at the end pls
    return(
        <div>
            <img className="h-40 w-40" src={item.urls.small==undefined?'#':item.urls.small}/>
            <p>count- {count}</p>
            <p>Price each- {item.price}</p>
            <p>Total -{(item.price)*count} </p>
        </div>
    )
}

const Checkout =({item,userItem})=>{
    console.log(userItem)
    const userFinalCart= item.filter(x=>userItem.hasOwnProperty(x.id))
    console.log(userFinalCart)
   

    let finalSum=0
    try{
        const priceArray= userFinalCart.map(x=>((x.price)*userItem[x.id]))
        finalSum=priceArray.reduce((prev,curr)=>prev+(curr),0)
        console.log(finalSum)
    }catch(error){
        console.log(error)
    }
    return(
        <div>
            <p>Checkout content</p>
            {userFinalCart.map((x=><CheckoutItemFunction item={x} count={userItem[x.id]}/>))}
            <p>Grand Total: {finalSum}</p>
        </div>
    )
}
export default Checkout