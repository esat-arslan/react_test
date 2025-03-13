import {giphy_api} from './secrets.jsx';
import { useState, useEffect } from "react";
import './styles.css';
function TestApi() {
    console.log(giphy_api);
}
function GetImages(){
    const[gifUrls, setGifUrls] = useState([]);
    const[counter, setCounter] = useState(0);
    const [list, setList] = useState([]);
    useEffect(() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphy_api}&q=cat&rating=g&limit=10`;
        fetch(url)
        .then(response => response.json())
        .then(response=>{
            if(response.meta.status === 401) {
                console.error('API key is invalid');
                return;
            }
            const gifs = response.data;
            if(gifs.length > 0 ) {
                const urls = gifs.map(gif => gif.images.original.url);
                setGifUrls(urls);
                setList(new Array(urls.length).fill(false));
            }else {
                console.error("No gifs found");
            }
        }).catch(error => {console.error(error)});
    },[]);
    const shuffleImages = () => {
        setGifUrls(prevUrls => {
            let shuffled = [...prevUrls];
            for (let i = shuffled.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        });
    }
    const [clickedImages, setClickedImages] = useState([]);
    const handleClick = (imageUrl) => {
        if(clickedImages.includes(imageUrl)) {
            alert("You already clicked on this image");
            setClickedImages([]);
            setCounter(0);
        }else{
            setClickedImages((prev)=>[...prev, imageUrl]);
            setCounter(counter + 1);
        }
        shuffleImages();
    }
        return(
            <div id='image-container' >
                {gifUrls.length>0?(
                    gifUrls.map((url, index)=>
                    <div key={index} className='card'
                    onClick={() => handleClick(url)} >
                        <div className='card-inner'>
                            <img src={url} alt='gif'/>
                        </div>
                    </div>
                    
                )
                ):(
                    <p>Loading...</p>
                )}
                <h1>Score: {counter}</h1>
            </div>
        )
}
export {TestApi, GetImages}; 
