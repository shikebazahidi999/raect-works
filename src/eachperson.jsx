import { useParams } from "react-router-dom";


import { useEffect, useState } from "react";
import Navbar from "./App";
export default function EachPerson(){

   const { id } = useParams();
    let [info,setU] = useState([]);
         useEffect(()=>{
           async function Data(){
             const dataha = await   fetch("https://jsonplaceholder.typicode.com/users");
            const Datas = await dataha.json();
           const info =  Datas.find(x=>x.id ==id)
           const list = [];
           list.push(info)
           setU(list)
            }
            Data();
        
         },[])


    
    if (info.length==0){
        return(
            <h1 className=" text-3xl font-black text-red-700 ">Loading</h1>
        )
    }
    return(
        <>
       
        <Navbar/>
        
            
       
                                     <div className="relative w-fit group top-30">
<div className=" h-96 w-72  rounded-xl hover:border hover:border-pink-500 transition-all 
duration-300 hover:shadow-xl hover:shadow-pink-50 hover:blur-[2px] ">
    </div> 
<div className="bg-black-400/45 w-full absolute bottom-0 left-0 hidden group-hover:block  p-2 rounded-b-2xl hover:backdrop-blur-lg">
<h1 className="font-extrabold text-2xl">Name:{info[0].name}</h1>
   

<div>
<p>Phone:{info[0]?.phone}</p>

</div>
    </div>       
 </div>
  
        </>
    )
}