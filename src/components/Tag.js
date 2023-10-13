

import axios from "axios";
import react, { useEffect, useState } from "react";
import Spinner from "./Spinner";

// const API_KEY='PT2zwmEfBaO4xABFyLRQtNWIJ0HXvHzVC';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = ()=>{

    const [gif,setGif]=useState("");
    const [loading,setLoading]=useState();
    const [tag,setTag]=useState("");
    // const API_KEY='PT2zwmEfBaO4xABFyLRQtNWIJ0HXvHzVC'

    // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData(){
        setLoading(true)
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    function changeHandler(event){

        setTag(event.target.value);



    }

    return(
        <div className="w-1/2  bg-slate-800 rounded-lg border-[10px] border-blue-700 flex flex-col
         items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl font-bold underline  uppercase text-white"> A RANDOM {tag} GIF</h1>
            {/* <Spinner/> */}

             {
                loading?(<Spinner/>):( <img src={gif} className="" width="200px" height="10px"/>)
             }
            
            <input
                className="w-[200px] text-2xl  mt-[10px] mb-[1px] font-bold rounded-md text-center"
                onChange={changeHandler}
                value={tag}
            />

            <button onClick={clickHandler}
            className="bg-yellow-400  w-[200px] text-2xl  mt-[10px] mb-[20px] font-bold rounded-md " >
                Generate
            </button>
        </div>

    )
}

export default Tag;