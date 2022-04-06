import { useEffect} from 'react';
const HomeBackGroundImage=({count,imageData})=>{
    console.log(imageData)
    return(
        <div className={`homePageImage${count===1?'':' hidden'}`}  data-id={count}>
            Image-{count}
            <img src={imageData.urls.regular} className='h-80 w-80' alt ='sampleImage'/>
        </div>
    )
}

const ImageCarousel=({imageList})=>{
    useEffect(()=>{
        let tempCount=0
        const swapImage=()=>{
            const images = document.querySelectorAll('.homePageImage')
            for(let i=0;i<images.length;i++){
                images[i].className=''
                images[i].className='hidden homePageImage'
            }
            const finalImage= images[tempCount]
            finalImage.className='homePageImage'
            if(tempCount+1>9){
                tempCount=0
            }else{
                tempCount++
            }
        }
        const imageInterval = setInterval(swapImage,1000)    
        return function cleanup(){
            clearInterval(imageInterval)
        }
    },[])
    let count=1
    return(
        <div>
            <div>
            {imageList.map(x=><HomeBackGroundImage count={count++} imageData={x}/>)}
        </div>
        <div className='flex flex-row'> 
            {imageList.map(x=><div className='bg-slate-700 h-2 w-2 m-1 rounded-full'></div>)}
        </div>
        </div>
        
    )
}
const Home=({imageList})=>{
    const images=imageList.splice(0,10)
    return(
        <div>
            <div>
                <ImageCarousel imageList={images}/>
            </div>
            <div>
                <p>Welcome to  art galleria where you can purchase the works of artists</p>
            </div>
        </div>
    )
}
export default Home