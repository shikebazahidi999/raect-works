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
    })
    return(
        <>
        <Navbar/>
        <div>
            <div>

            </div>
        </div>
        </>

    )
}