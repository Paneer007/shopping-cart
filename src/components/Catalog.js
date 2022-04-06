import { useState } from "react"
import { Link } from "react-router-dom"
const CatalogCard =({object})=>{
    console.log((object))
    return(
        <div className="h-96 w-96 mt-8 mb-8 flex flex-col ">
            <img className="h-72 w-72"src={object.urls.small}/>
            <div>
                <p>Price: {object.price}</p>
                <p>Add</p>
                <Link to={`/catalog/${object.id}`}>Learn More</Link>
            </div>
        </div>
    )
}
const Catalog=({imageList})=>{
    return(
        <div className="flex flex-row flex-wrap justify-center">
            {imageList.map(x=><CatalogCard object={x}/>)}
        </div>
    )
}
export default Catalog