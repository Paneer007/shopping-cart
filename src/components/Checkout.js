const Checkout =({item,userItem})=>{
    const userFinalCart= item.filter(x=>userItem.hasOwnProperty(x.id))
    
    console.log(userFinalCart)
    return(
        <div>
            <p>Checkout content</p>
            {userFinalCart.map(x=>console.log(x))}
        </div>
    )
}
export default Checkout