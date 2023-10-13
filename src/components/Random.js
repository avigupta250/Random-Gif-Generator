import axios from "axios";
import react, { useEffect, useState } from "react";
import Spinner from "./Spinner";

// const API_KEY='PT2zwmEfBaO4xABFyLRQtNWIJ0HXvHzVC';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = ()=>{

    const [gif,setGif]=useState("");
    const [loading,setLoading]=useState()
    // const API_KEY='PT2zwmEfBaO4xABFyLRQtNWIJ0HXvHzVC'

    // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData(){
        setLoading(true)
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url);

        
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    
       

    }
    
    useEffect(()=>{
        fetchData();
    },[])

    function clickHandler(){
        fetchData();
    }

    return(
        <div className="w-1/2  bg-slate-800 rounded-lg border-[10px] border-blue-700 flex flex-col
         items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl font-bold underline capitalize text-white"> A RANDOM GIF</h1>
            {/* <Spinner/> */}

             {
                loading?(<Spinner/>):( <img src={gif} className="" width="200px"/>)
             }
          

            <button onClick={clickHandler}
            className="bg-yellow-400  w-[200px] text-2xl  mt-[20px] mb-[20px] font-bold rounded-md " >
                Generate
            </button>
        </div>

    )
}

export default Random;