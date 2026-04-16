import { useEffect, useState } from "react";
import Navbar from "./App";
import { Link } from "react-router-dom";

export default function Costomars(){
    let [ulist,setU] = useState([]);
     useEffect(()=>{
       async function Data(){
         const dataha = await   fetch("https://jsonplaceholder.typicode.com/users");
        const Datas = await dataha.json();
        setU(Datas);

        }
        Data();
     },[ulist])
    


    return(
        <>
        <Navbar/>
        {ulist.length > 0 &&(
                 <div className="flex flex-row gap-4">
            {ulist.map((p)=> (
                             <div key={p.id} className="relative w-fit group top-30">
<img className=" bg-gray-300 h-96 w-72  rounded-xl hover:border hover:border-pink-500 transition-all duration-300 hover:shadow-xl hover:shadow-pink-50 hover:blur-[2px] " src={""} alt=""/>
<div className="bg-black-400/45 w-full absolute bottom-0 left-0 hidden group-hover:block  p-2 rounded-b-2xl hover:backdrop-blur-lg">
<Link  className="font-extrabold text-xl"to={`/costomars/${p.id}`}  >{p.name}</Link>
<p>{p.id}</p>
   


    </div>       
 </div> 
                ))
            }

        </div>   
        )

        }

        </>
    )
}
