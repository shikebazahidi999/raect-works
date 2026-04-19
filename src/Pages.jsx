import { useEffect, useState } from "react";
import Navbar from "./App";

export default function Pages(){
    const [value, setvalue] = useState([]);
    useEffect(()=>{
       async function posts(){
          const Data = await fetch("https://jsonplaceholder.typicode.com/posts");
          const Datas = await Data.json();
          setvalue(Datas)
        }
        posts()
    });
    if(!value){
        return(
            <div className="h-full w-full flex items-center justify-center">
            <h1 className=" text-3xl text-center ">Wait For It...</h1>
            </div>
        )
    }
    return(
        <>
        <Navbar/>
        <div className="bg-black h-full w-full ">
            <div className="bg">
                {
                    value.map((p)=>{
                        <div className="flex flex-col bg-stone-200">
                            <h1>{p.title}</h1>
                            <p>{p.body}</p>
                        </div>
                    })
                }

            </div>
        </div>
        </>

    )
}